import {Film} from '../../types/film';
import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_GENRE, NameSpace, SHOW_MORE_BEGIN_COUNT, SHOW_MORE_NEXT_COUNT} from '../../consts';
import {addToFavorite, fetchFavorites, fetchFilmAction} from '../api-action';
import {changeGenre, showMore} from '../action';

type InitialState = {
  films: Film[];
  isDataLoaded: boolean;
  genre: string;
  renderedFilmCount: number;
  favorites: Film[];
  isFavsLoaded: boolean;
}

const initialState: InitialState = {
  films: [],
  isDataLoaded: false,
  genre: DEFAULT_GENRE,
  renderedFilmCount: SHOW_MORE_BEGIN_COUNT,
  favorites: [],
  isFavsLoaded: false,
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
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.isFavsLoaded = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.isFavsLoaded = false;
        state.favorites = action.payload;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        const index = state.films.findIndex((item) => item.id === action.payload.id);
        state.films[index].isFavorite = action.payload.isFavorite;
      });
  }
});
