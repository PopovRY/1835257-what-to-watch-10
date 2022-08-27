import {DurationTemplate, ErrorMessage, HOUR, RatePoints, Rating, Tab, TimeMetric} from './consts';
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

export const signInValidator = (email: string, password: string): string | null => {
  const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
  const isPasswordValid = /^(?=^[a-zA-Z0-9]{2,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/.test(password);

  if (!email || !isPasswordValid) {
    return ErrorMessage.SignInValidate;
  }

  if (!isEmailValid) {
    return ErrorMessage.IncorrectEmail;
  }

  return null;
};

export default getTextRating;
