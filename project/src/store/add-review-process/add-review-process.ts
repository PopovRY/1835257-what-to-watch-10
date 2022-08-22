import {createSlice} from '@reduxjs/toolkit';
import {addReviewAction} from '../api-action';
import {NameSpace} from '../../consts';

type InitialState = {
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  isDataLoaded: false,
};

export const addReviewProcess = createSlice({
  name: NameSpace.AddReview,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addReviewAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isDataLoaded = false;
      });
  }
});
