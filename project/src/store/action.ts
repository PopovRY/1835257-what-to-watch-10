import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AuthorizationStatus} from '../consts';

export const fetchFilms = createAction<Film[]>('films/fetchFilms');

export const showMore = createAction<number>('films/showMore');

export const loadFilms = createAction<Film[]>('loadFilms');

export const loadPromo = createAction<Film>('data/loadPromo');

export const changeGenre = createAction<string>('changeGenre');

export const resetShowMoreCount = createAction('resetShowMoreCount');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');

export const setError = createAction<string | null>('setError');

export const loadFilm = createAction('data/loadFilm', (value) => ({
  payload: value,
}));

export const loadSimilarFilms = createAction('data/loadSimilarFilms', (value) => ({
  payload: value,
}));

export const loadFilmComments = createAction('data/loadFilmComments', (value) => ({
  payload: value,
}));
