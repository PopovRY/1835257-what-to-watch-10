import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilmGenres, getGenre} from '../../store/films-process/selectors';
import {changeGenre} from '../../store/action';
import GenreButton from '../genre-button/genre-button';
import {MAX_GENRES_COUNT} from '../../consts';

function GenreTabs(): JSX.Element {
  const selectedGenre = useAppSelector(getGenre);
  const genres = useAppSelector(getFilmGenres);

  const dispatch = useAppDispatch();

  const handleOnTabClick = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.textContent;
    if (clickedGenre !== null) {
      dispatch(changeGenre(clickedGenre));
    }
  };


  const generateGenreTab =
    genres.map((genre) => (
      <GenreButton key={genre} genre={genre} isActive={selectedGenre === genre} onClick={handleOnTabClick} />
    )).slice(0, MAX_GENRES_COUNT);


  return (
    <ul className="catalog__genres-list">
      {generateGenreTab}
    </ul>
  );
}

export default GenreTabs;
