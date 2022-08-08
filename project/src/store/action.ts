import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {AuthorizationStatus} from '../consts';

export const changeGenre = createAction<string>('changeGenre');
export const incrementShowMoreCount = createAction('incrementShowMoreCount');
export const resetShowMoreCount = createAction('resetShowMoreCount');

export const loadFilms = createAction<Films>('loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const setError = createAction<string | null>('setError');
