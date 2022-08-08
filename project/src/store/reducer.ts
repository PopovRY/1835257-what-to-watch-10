
import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  incrementShowMoreCount,
  loadFilms,
  requireAuthorization,
  resetShowMoreCount,
  setDataLoadedStatus, setError
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
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const genre = action.payload;
      if(action.payload) {
        state.genre = genre;
        if(genre !== DEFAULT_GENRE) {
          state.filteredFilms = state.films.filter((item) => item.genre === genre);
        }else {
          state.filteredFilms = state.films;
        }
      }
    }).addCase(incrementShowMoreCount, (state) => {
      state.showingFilmCount = state.showingFilmCount + SHOW_MORE_NEXT_COUNT;
    }).addCase(resetShowMoreCount, (state, action) => {
      state.showingFilmCount = SHOW_MORE_BEGIN_COUNT;
    }).addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
    }).addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    }).addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    }).addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
