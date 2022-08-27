import {NameSpace} from '../../consts';
import {State} from '../../types/state';

export const getComments = (state: State) => state[NameSpace.AddReview].comments;

export const getIsSendingComment = (state: State) => state[NameSpace.AddReview].isDataLoaded;

export const getCommentError = (state: State) => state[NameSpace.AddReview].error;
