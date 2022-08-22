import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmsList({ films }: FilmListProps): JSX.Element {
  const filmsList =
    films.map((film) => (
      <FilmCard key={film.id} film={film} />
    ));

  return (
    <div className="catalog__films-list" >
      {filmsList}
    </div>
  );
}

export default FilmsList;
