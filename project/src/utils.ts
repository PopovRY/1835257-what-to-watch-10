import {Films} from './types/films';
import {RatePoints, Rating, Tab} from './consts';

export const huminazeFilmDuration = (minutes: number) => {
  const MINUTES_IN_HOUR = 60;
  const hours = minutes / MINUTES_IN_HOUR;
  if (hours < 1) {
    return `${minutes}m`;
  } else if ((minutes % MINUTES_IN_HOUR) === 0) {
    return `${hours.toFixed(0)}h`;
  }
  return `${hours.toFixed(0)}h ${minutes % MINUTES_IN_HOUR}m`;
};

export const getGenres = (filmList: Films[]): string[] =>
  [...new Set(filmList.map((film) => film.genre))];


function getTextRating(rate?: number) {
  let rating = '';
  if (rate) {
    switch (true) {
      case (rate > RatePoints.Bad && rate < RatePoints.LowNormal):
        rating = Rating.Bad;
        break;
      case (rate >= RatePoints.LowNormal && rate < RatePoints.LowGood):
        rating = Rating.Normal;
        break;
      case (rate >= RatePoints.LowGood && rate < RatePoints.HighGood):
        rating = Rating.Good;
        break;
      case (rate >= RatePoints.HighGood && rate < RatePoints.Awesome):
        rating = Rating.VeryGood;
        break;
      case (rate === RatePoints.Awesome):
        rating = Rating.Awesome;
        break;
    }
  }
  return rating;
}

export const getTab = () => {
  const queryParams = (new URL(document.location.href)).searchParams;
  return queryParams.get('tab') ?? Tab.Overview;
};

export default getTextRating;
