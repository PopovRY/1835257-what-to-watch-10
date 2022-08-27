import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AppRoute} from '../consts';
import {Film} from '../types/film';
import {AxiosError, AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {NewCommentType, ReviewType} from '../types/comments';
import {FavoriteData} from '../types/favs-film-data';
import {redirectToRoot, setFilm} from './action';

export const fetchFilmAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilms',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'login',
  async ({ login: email, password }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(redirectToRoot(AppRoute.Main));
      return data;
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      return rejectWithValue(error.response?.data.error);
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchFilm = createAsyncThunk<Film, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film>(`${AppRoute.Films}${filmId}`);
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<Film[], string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<Film[]>(`${AppRoute.Films}${filmId}/similar`);
    return data.filter((film) => film.id !== Number(filmId));
  },
);


export const fetchFilmComments = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<ReviewType[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<ReviewType[], [(string | undefined), NewCommentType], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReview',
  async ([filmID, { comment, rating }], { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<ReviewType[]>(`${APIRoute.Comments}/${filmID}`, { comment, rating });
      dispatch(redirectToRoot(`${AppRoute.Films}${filmID}`));
      return data;
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      return rejectWithValue(error);
    }
  });

export const fetchFavorites = createAsyncThunk<Film[], undefined, {
  extra: AxiosInstance,
}>(
  'favorite/fetchFavorites',
  async (_args, { extra: api }) => {
    const { data } = await api.get<Film[]>(APIRoute.Favorite);
    return data;
  }
);

export const addToFavorite = createAsyncThunk<Film, FavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/addToFavorite',
  async ({ id, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<Film>(`${APIRoute.Favorite}/${id}/${Number(!status)}`);
    dispatch(setFilm(data));
    return data;
  }
);
