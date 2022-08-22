import {Film} from '../../types/film';
import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_GENRE, NameSpace, SHOW_MORE_BEGIN_COUNT, SHOW_MORE_NEXT_COUNT} from '../../consts';
import {fetchFilmAction} from '../api-action';
import {changeGenre, showMore} from '../action';

type InitialState = {
  films: Film[],
  isDataLoaded: boolean;
  genre: string;
  renderedFilmCount: number,
}

const initialState: InitialState = {
  films: [],
  isDataLoaded: false,
  genre: DEFAULT_GENRE,
  renderedFilmCount: SHOW_MORE_BEGIN_COUNT,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(changeGenre, (state, action) => {
        state.genre = action.payload;
        state.renderedFilmCount = SHOW_MORE_NEXT_COUNT;
      })
      .addCase(showMore, (state, action) => {
        state.renderedFilmCount = action.payload;
      });
  }
});
