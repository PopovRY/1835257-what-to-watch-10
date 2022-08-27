import {AuthorizationStatus, NameSpace} from '../../consts';
import {AnyAction, createSlice} from '@reduxjs/toolkit';
import {checkAuthAction, loginAction, logoutAction} from '../api-action';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  error: string;
  avatar: string;
  isSending: boolean;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  avatar: '',
  isSending: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state,action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.avatar = action.payload.avatarUrl;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.avatar = action.payload.avatarUrl;
        state.isSending = false;
      })
      .addCase(loginAction.rejected, (state, action: AnyAction) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.error = action.payload;
        state.isSending = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const { setError } = userProcess.actions;
