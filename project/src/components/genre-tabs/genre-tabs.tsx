import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectFilmGenres, selectGenre} from '../../store/films-process/selectors';
import {changeGenre} from '../../store/action';
import GenreButton from '../genre-button/genre-button';
import {MAX_GENRES_COUNT} from '../../consts';

function GenreTabs(): JSX.Element {
  const selectedGenre = useAppSelector(selectGenre);
  const genres = useAppSelector(selectFilmGenres);

  const dispatch = useAppDispatch();

  const onTabClickHandler = (evt: React.MouseEvent) => {
    const clickedGenre = evt.currentTarget.textContent;
    if (clickedGenre !== null) {
      dispatch(changeGenre(clickedGenre));
    }
  };


  const generateGenreTab =
    genres.map((genre) => (
      <GenreButton key={genre} genre={genre} isActive={selectedGenre === genre} onClick={onTabClickHandler} />
    )).slice(0, MAX_GENRES_COUNT);


  return (
    <ul className="catalog__genres-list">
      {generateGenreTab}
    </ul>
  );
}

export default GenreTabs;