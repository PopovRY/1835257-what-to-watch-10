import { store } from '../store';
import {TIMEOUT_SHOW_ERROR} from '../consts';
import {setError} from '../store/user-process/user-process';

export const processErrorHandle = (): void => {
  setTimeout(
    () => store.dispatch(setError(false)),
    TIMEOUT_SHOW_ERROR,
  );
};
