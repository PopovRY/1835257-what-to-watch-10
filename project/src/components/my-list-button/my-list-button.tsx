import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilmID, getFilmStatus, selectFavoriteFilms} from '../../store/films-process/selectors';
import {useEffect} from 'react';
import {addToFavorite, fetchFavorites} from '../../store/api-action';
import {FavoriteData} from '../../types/favs-film-data';

function MyListBtn(): JSX.Element {

  const favoriteFilmsLength = useAppSelector(selectFavoriteFilms).length;
  const dispatch = useAppDispatch();
  const filmID = useAppSelector(getFilmID);
  const filmStatus = useAppSelector(getFilmStatus);

  const handleAddToFavorite = () => {
    const data: FavoriteData = {
      id: String(filmID),
      status: filmStatus,
    };
    dispatch(addToFavorite(data));
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [filmStatus, dispatch]);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleAddToFavorite}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          filmStatus
            ? <use xlinkHref="#in-list" />
            : <use xlinkHref="#add" />
        }
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsLength}</span>
    </button>
  );
}

export default MyListBtn;
