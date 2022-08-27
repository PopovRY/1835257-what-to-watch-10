import {createAction} from '@reduxjs/toolkit';

export const showMore = createAction<number>('films/showMore');

export const changeGenre = createAction<string>('changeGenre');

export const setFilm = createAction('film/setFilm', (value) => ({
  payload: value,
}));

export const redirectToRoot = createAction<string>('app/redirectToRoute');
