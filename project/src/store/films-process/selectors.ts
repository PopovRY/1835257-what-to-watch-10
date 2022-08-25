import {NameSpace} from '../../consts';
import {State} from '../../types/state';
import {createSelector} from 'reselect';

export const selectFilms = (state: State) => state[NameSpace.Films].films;
export const selectFavoriteFilms = (state: State) => state[NameSpace.Films].favorites;
export const selectIsFavsLoaded = (state: State) => state[NameSpace.Films].isFavsLoaded;
export const selectLoadingDataStatus = (state: State) => state[NameSpace.Films].isDataLoaded;
export const selectFilmGenres = createSelector(selectFilms, (films) => ['All genres', ...new Set(films.map((film) => film.genre))],);
export const selectGenre = (state: State) => state[NameSpace.Films].genre;
export const selectRenderedFilmCount = (state: State) => state[NameSpace.Films].renderedFilmCount;
export const getFilmID = (state: State): number | undefined => state[NameSpace.Film].film?.id;
export const getFilmStatus = (state: State): boolean | undefined => state[NameSpace.Film].film?.isFavorite;
