import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {DEFAULT_GENRE, SHOW_MORE_NEXT_COUNT} from '../../consts';
import {showMore} from '../../store/action';
import ShowMoreButton from '../show-more-button/show-more-button';
import {getGenre, getRenderedFilmCount} from '../../store/films-process/selectors';
import {useMemo} from 'react';


function FilmsListMain({ films }: { films: Film[] }): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedGenre = useAppSelector(getGenre);
  const renderedFilmCount = useAppSelector(getRenderedFilmCount);
  const sortedFilms = films.filter((film) => selectedGenre === DEFAULT_GENRE ? films : film.genre === selectedGenre);

  const handleOnShowMoreBtnClick = () => {
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
        <ShowMoreButton onClick={handleOnShowMoreBtnClick} />
      }
    </>
  );
}

export default FilmsListMain;
