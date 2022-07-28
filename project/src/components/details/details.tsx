import { useParams} from 'react-router-dom';
import {Film} from '../../types/film';
import {huminazeFilmDuration} from '../../utils';
import NotFoundPage from '../../pages/not-found-page/not-found-page';


type DetailsProps = {
  films: Film[];
}

function Details({ films }: DetailsProps): JSX.Element {
  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));

  if(!film) {
    return (
      <div>
        <NotFoundPage/>
      </div>
    );
  }

  const actorsList = film.starring[0].split(',').map((star) => `${star}`);

  return (
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
  );
}

export default Details;
