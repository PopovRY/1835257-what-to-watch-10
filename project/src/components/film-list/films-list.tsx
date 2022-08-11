import {Film} from '../../types/film';
import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SHOW_MORE_NEXT_COUNT} from '../../consts';
import {showMore} from '../../store/action';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmListProps = {
  films: Film[];
}

function FilmsList({ films }: FilmListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector((state) => state.genre);
  const showingFilmCount = useAppSelector((state) => state.showingFilmCount);
  const sortedFilms = films.filter((film) => selectedGenre === 'All genres' ? films : film.genre === selectedGenre);

  const onShowMoreBtnClick = () => {
    dispatch(showMore(showingFilmCount + SHOW_MORE_NEXT_COUNT));
  };

  const isShowBtn = showingFilmCount < sortedFilms.length;

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleSetActive = (id: number) =>
    setActiveCard(id);

  const handleSetNoActive = () =>
    setActiveCard(null);


  const filmsList =
    sortedFilms?.slice(0, showingFilmCount).map((film, index) => (
      <FilmCard key={film.id}
        film={film}
        activeCard={activeCard}
        onMouseEnter={handleSetActive}
        onMouseLeave={handleSetNoActive}
      />
    ));

  return (
    <>
      <div className="catalog__films-list">
        {filmsList}
      </div>
      {
        isShowBtn &&
        <ShowMoreButton onClick={onShowMoreBtnClick} />
      }
    </>
  );
}

export default FilmsList;
