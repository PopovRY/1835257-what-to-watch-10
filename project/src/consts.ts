export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films/',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export const DEFALUT_RATING_VALUE = 0;

export enum TabNames {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const DEFAULT_GENRE = 'All genres';
export const SHOW_MORE_NEXT_COUNT = 8;
export const SHOW_MORE_BEGIN_COUNT = 8;
export const TIMEOUT_SHOW_ERROR = 5000;
export const MAX_GENRES_COUNT = 10;

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  AddReview = '/films/:id/*',
}

export const MAX_SIMILAR_FILMS_COUNT = 4;

export const enum Rating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export const enum RatePoints {
  Bad = 0,
  LowNormal = 3,
  LowGood = 5,
  HighGood = 8,
  Awesome = 10,
}

export enum NameSpace {
  User = 'USER',
  PromoFilm = 'PROMO_FILM',
  Films = 'FILMS',
  Film = 'FILM',
  AddReview = 'ADD_REVIEW',
}

export enum Tab {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

export const PLAY_TIMEOUT = 1000;
