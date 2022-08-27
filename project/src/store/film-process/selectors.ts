import {State} from '../../types/state';
import {NameSpace} from '../../consts';

export const getFilm = (state: State) => state[NameSpace.Film].film;
export const getSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms;
export const getPromoFilm = (state: State) => state[NameSpace.Film].promoFilm;

