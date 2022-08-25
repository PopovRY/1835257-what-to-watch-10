import {DurationTemplate, HOUR, RatePoints, Rating, Tab, TimeMetric} from './consts';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

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

export const formattingLastTime = (runtime: number) => {
  const timeDuration = dayjs.duration(runtime, TimeMetric.Second);

  if ((runtime / HOUR) < 1) {
    return timeDuration.format(DurationTemplate.MinutesSeconds);
  }

  return timeDuration.format(DurationTemplate.HoursMinutesSeconds);
};

export default getTextRating;
