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
