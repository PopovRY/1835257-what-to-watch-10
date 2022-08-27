export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films/',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
  ServerError = '/servererror',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export const DEFALUT_RATING_VALUE = 0;

export const DEFAULT_GENRE = 'All genres';
export const SHOW_MORE_NEXT_COUNT = 8;
export const SHOW_MORE_BEGIN_COUNT = 8;
export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_GENRES_COUNT = 10;

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  AddReview = '/films/:id/*',
  Favorite = '/favorite',
}

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

export enum DurationTemplate {
  MinutesSeconds = 'm[:] s',
  HoursMinutesSeconds = 'H[:] m[:] s',
  HoursMinutes = 'H[h] m[m]'
}

export enum TimeMetric {
  Second = 'seconds',
  Minute = 'minutes',
}

export const HOUR = 360;

export enum PlayerProgress {
  Start = 0,
  End = 100,
}

export enum CommentLength {
  Min = 50,
  Max = 400,
}

export enum ErrorMessage {
  SignInValidate = 'We can’t recognize this email and password combination. Please try again.',
  IncorrectEmail = 'Please enter a valid email address',
  ServerError = 'Unknown server error'
}
