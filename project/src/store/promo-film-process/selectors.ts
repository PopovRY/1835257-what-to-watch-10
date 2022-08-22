import {NameSpace} from '../../consts';
import {State} from '../../types/state';

export const selectPromoFilm = (state: State) => state[NameSpace.PromoFilm].promoFilm;
export const selectLoadingDataStatus = (state: State) => state[NameSpace.PromoFilm].isDataLoaded;
