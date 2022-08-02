export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
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
export const SHOW_MORE_BEGIN_COUNT = 0;
