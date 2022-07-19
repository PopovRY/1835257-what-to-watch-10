import {Film} from '../../types/film';
import {useState} from 'react';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmsList({ films }: FilmListProps): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFilm, setActiveCard] = useState({});

  const setActive = (id: number) => {
    const activeFilm = films.filter((film) => film.id === id);
    setActiveCard(activeFilm);
  };

  const filmsList =
    films?.map((film) => (
      <FilmCard key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} setActiveCard={setActive} />
    ));

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;
