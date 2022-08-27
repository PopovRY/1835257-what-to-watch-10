import {NameSpace} from '../../consts';
import {State} from '../../types/state';

export const getAuth = (state: State) => state[NameSpace.User].authorizationStatus;
export const getError = (state: State) => state[NameSpace.User].error;
export const getAvatar = (state: State) => state[NameSpace.User].avatar;
export const getIsLoginSending = (state: State) => state[NameSpace.User].isSending;
