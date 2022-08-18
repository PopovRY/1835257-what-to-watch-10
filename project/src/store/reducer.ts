
import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre, fetchFilms, loadFilm, loadFilmComments,
  loadFilms, loadPromo, loadSimilarFilms,
  requireAuthorization,
  setDataLoadedStatus, setError, showMore
} from './action';
import {AuthorizationStatus, DEFAULT_GENRE, SHOW_MORE_BEGIN_COUNT, SHOW_MORE_NEXT_COUNT} from '../consts';
import {Film} from '../types/film';
import {ReviewType} from '../types/comments';

type InitalState = {
  genre: string,
  filteredFilms: Film[],
  showingFilmCount: number,
  films: Film[],
  promo: Film,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string | null,
  film: Film,
  similarFilms: Film[],
  filmComments: ReviewType[] | [],
}

const initialState: InitalState = {
  genre: DEFAULT_GENRE,
  filteredFilms: [],
  showingFilmCount: SHOW_MORE_BEGIN_COUNT,
  films: [],
  promo: {} as Film,
  authorizationStatus: AuthorizationStatus.Auth,
  isDataLoaded: false,
  error: null,
  film: {} as Film,
  similarFilms: [],
  filmComments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.showingFilmCount = SHOW_MORE_NEXT_COUNT;
    })
    .addCase(showMore, (state, action) => {
      state.showingFilmCount = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFilmComments, (state, action) => {
      state.filmComments = action.payload;
    });
});

export {reducer};
