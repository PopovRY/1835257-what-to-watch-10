import {Film} from '../../types/film';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {addToFavorite, fetchFilm, fetchFilmComments, fetchPromoAction, fetchSimilarFilms} from '../api-action';
import {ReviewType} from '../../types/comments';
import {setFilm} from '../action';

type InitialState = {
  film: Film;
  promoFilm: Film;
  similarFilms: Film[];
  filmComments: ReviewType[] | [];
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  film: {} as Film,
  promoFilm: {} as Film,
  filmComments: [],
  similarFilms: [],
  isDataLoaded: false,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchFilmComments.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmComments.fulfilled, (state, action) => {
        state.filmComments = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        if (state.film.id === action.payload.id) {
          state.film = action.payload;
        }
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(setFilm, (state, action) => {
        state.film = action.payload;
      });
  }
});
