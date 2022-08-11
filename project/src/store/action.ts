import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/film';
import {AuthorizationStatus} from '../consts';

export const changeGenre = createAction<string>('changeGenre');
export const showMore = createAction<number>('films/showMore');
export const resetShowMoreCount = createAction('resetShowMoreCount');

export const loadFilms = createAction<Film[]>('loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const setError = createAction<string | null>('setError');
