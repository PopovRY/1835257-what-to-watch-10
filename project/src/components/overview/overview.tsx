import {Film} from '../../types/film';
import {useParams} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type OverviewProps = {
  films: Film[];
}

function Overview({ films }: OverviewProps): JSX.Element {
  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));

  if(!film) {
    return (
      <NotFoundPage/>
    );
  }

  return (
    <>
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
