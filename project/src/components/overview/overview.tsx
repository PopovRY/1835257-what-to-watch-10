import {Film} from '../../types/film';
import {Link, useParams} from 'react-router-dom';

type OverviewProps = {
  films: Film[];
}

function Overview({ films }: OverviewProps): JSX.Element {
  const params = useParams();
  const film = films.find((filmA) => String(filmA.id) === params.id) as Film;

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <Link to='#' className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link to={'details'} className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to={'reviews'} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring} and other</strong></p>
      </div>
    </>
  );
}

export default Overview;
