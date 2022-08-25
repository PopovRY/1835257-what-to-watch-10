import {State} from '../../types/state';
import {NameSpace} from '../../consts';

export const selectFilm = (state: State) => state[NameSpace.Film].film;
export const selectComments = (state: State) => state[NameSpace.Film].filmComments;
export const selectSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms;
