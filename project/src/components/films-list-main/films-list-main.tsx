import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SHOW_MORE_NEXT_COUNT} from '../../consts';
import {showMore} from '../../store/action';
import ShowMoreButton from '../show-more-button/show-more-button';
import {selectGenre, selectRenderedFilmCount} from '../../store/films-process/selectors';
import {useMemo} from 'react';


function FilmsListMain({ films }: { films: Film[] }): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector(selectGenre);
  const renderedFilmCount = useAppSelector(selectRenderedFilmCount);
  const sortedFilms = films.filter((film) => selectedGenre === 'All genres' ? films : film.genre === selectedGenre);

  const onShowMoreBtnClick = () => {
    dispatch(showMore(renderedFilmCount + SHOW_MORE_NEXT_COUNT));
  };

  const isShowBtn = renderedFilmCount < sortedFilms.length;

  const filmsList = useMemo(() =>
    sortedFilms?.slice(0, renderedFilmCount).map((film) => (
      <FilmCard key={film.id}
        film={film}
      />
    )), [renderedFilmCount, sortedFilms]);

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

export default FilmsListMain;
