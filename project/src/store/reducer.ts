import {films} from '../mocks/films';
import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, incrementShowMoreCount, loadFilms, requireAuthorization, resetShowMoreCount} from './action';
import {AuthorizationStatus, DEFAULT_GENRE, SHOW_MORE_BEGIN_COUNT, SHOW_MORE_NEXT_COUNT} from '../consts';

const initialState = {
  genre: DEFAULT_GENRE,
  filteredFilms: films,
  showingFilmCount: SHOW_MORE_BEGIN_COUNT,
  films: films,
  authorizationStatus: AuthorizationStatus.Unknown,
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
          state.filteredFilms = films;
        }
      }
    }).addCase(incrementShowMoreCount, (state, action) => {
      state.showingFilmCount = state.showingFilmCount + SHOW_MORE_NEXT_COUNT;
    }).addCase(resetShowMoreCount, (state, action) => {
      state.showingFilmCount = SHOW_MORE_BEGIN_COUNT;
    }).addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
