import {NameSpace} from '../../consts';
import {State} from '../../types/state';

export const selectAuth = (state: State) => state[NameSpace.User].authorizationStatus;
export const selectError = (state: State) => state[NameSpace.User].error;
