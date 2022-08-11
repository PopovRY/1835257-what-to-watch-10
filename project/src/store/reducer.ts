
import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  loadFilms,
  requireAuthorization,
  setDataLoadedStatus, setError, showMore
} from './action';
import {AuthorizationStatus, DEFAULT_GENRE, SHOW_MORE_BEGIN_COUNT, SHOW_MORE_NEXT_COUNT} from '../consts';
import {Film} from '../types/film';

type InitalState = {
  genre: string,
  filteredFilms: Film[],
  showingFilmCount: number,
  films: Film[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string | null
}

const initialState: InitalState = {
  genre: DEFAULT_GENRE,
  filteredFilms: [],
  showingFilmCount: SHOW_MORE_BEGIN_COUNT,
  films: [],
  authorizationStatus: AuthorizationStatus.Auth,
  isDataLoaded: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.showingFilmCount = SHOW_MORE_NEXT_COUNT;
    }).addCase(showMore, (state, action) => {
      state.showingFilmCount = action.payload;
    }).addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    }).addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    }).addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    }).addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
