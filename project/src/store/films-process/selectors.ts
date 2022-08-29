import {DEFAULT_GENRE, NameSpace} from '../../consts';
import {State} from '../../types/state';
import {createSelector} from 'reselect';

export const getFilms = (state: State) => state[NameSpace.Films].films;
export const getFavoriteFilms = (state: State) => state[NameSpace.Films].favorites;
export const getLoadingDataStatus = (state: State) => state[NameSpace.Films].isDataLoaded;
export const getFilmGenres = createSelector(getFilms, (films) => [DEFAULT_GENRE, ...new Set(films.map((film) => film.genre))],);
export const getGenre = (state: State) => state[NameSpace.Films].genre;
export const getRenderedFilmCount = (state: State) => state[NameSpace.Films].renderedFilmCount;
export const getFilmStatus = (state: State): boolean | undefined => state[NameSpace.Film].film?.isFavorite;
