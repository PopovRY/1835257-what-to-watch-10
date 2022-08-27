import {AnyAction, createSlice} from '@reduxjs/toolkit';
import {addReviewAction, fetchFilmComments} from '../api-action';
import {NameSpace} from '../../consts';
import {ReviewType} from '../../types/comments';

type InitialState = {
  isDataLoaded: boolean,
  error: string,
  comments: ReviewType[],
}

const initialState: InitialState = {
  isDataLoaded: false,
  error: '',
  comments: [],
};

export const addReviewProcess = createSlice({
  name: NameSpace.AddReview,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(addReviewAction.rejected, (state, action: AnyAction) => {
        state.isDataLoaded = false;
        state.error = action.payload;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.isDataLoaded = false;
        state.comments = action.payload;
        state.error = '';
      });
  }
});
