import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {addReviewProcess} from './add-review-process/add-review-process';
import {userProcess} from './user-process/user-process';
import {filmsProcess} from './films-process/films-process';
import {filmProcess} from './film-process/film-process';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.AddReview]: addReviewProcess.reducer,
});
