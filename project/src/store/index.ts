import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {rootReducer} from './root-reducer';
import {redirectToRoot} from './action';
import {AppRoute} from '../consts';
import {redirect} from './middlewares/redirect';

export const api = createAPI(() => store.dispatch(redirectToRoot(AppRoute.ServerError)));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)
});
