import { useParams, Link } from 'react-router-dom';
import {Film} from '../../types/film';


type DetailsProps = {
  films: Film[];
}

function Details({ films }: DetailsProps): JSX.Element {
  const params = useParams();
  const film = films.find((filmA) => String(filmA.id) === params.id) as Film;

  const actorsList = film.starring[0].split(',').map((star) => `${star}`, '');

  const huminazeFilmDuration = (minutes: number) => {
    const MINUTES_IN_HOUR = 60;
    const hours = minutes / MINUTES_IN_HOUR;
    if (hours < 1) {
      return `${minutes}m`;
    } else if ((minutes % MINUTES_IN_HOUR) === 0) {
      return `${hours.toFixed(0)}h`;
    }
    return `${hours.toFixed(0)}h ${minutes % MINUTES_IN_HOUR}m`;
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link to={`/films/${film.id}`} className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link to='#' className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${film.id}/reviews`} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value" >
              {actorsList}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{huminazeFilmDuration(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;
