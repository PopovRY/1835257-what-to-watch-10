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

export const Genre = {
  All: 'All genres',
  Comedies: 'Comedies',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Dramas: 'Dramas',
  Horror: 'Horror',
  KidsAndFamily: 'Kids & Family',
  Romance: 'Romance',
  SciFi: 'Sci-Fi',
  Thrillers: 'Thrillers',
};

export const GENRES = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];
