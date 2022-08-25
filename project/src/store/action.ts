import {createAction} from '@reduxjs/toolkit';

export const showMore = createAction<number>('films/showMore');

export const changeGenre = createAction<string>('changeGenre');

export const setError = createAction<string | null>('setError');

export const setFilm = createAction('film/setFilm', (value) => ({
  payload: value,
}));
