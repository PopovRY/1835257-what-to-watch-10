import {Films} from '../../types/films';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {fetchPromoAction} from '../api-action';

type InitialState = {
  promoFilm: Films,
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  promoFilm: {} as Films,
  isDataLoaded: false,
};

export const promoFilmProcess = createSlice({
  name: NameSpace.PromoFilm,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoaded = false;
      });
  }
});
