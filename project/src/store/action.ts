import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('changeGenre');
export const incrementShowMoreCount = createAction('changeShowMoreCount');
export const resetShowMoreCount = createAction('resetShowMoreCount');
