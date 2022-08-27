import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilmStatus, getFavoriteFilms} from '../../store/films-process/selectors';
import {useEffect} from 'react';
import {addToFavorite, fetchFavorites} from '../../store/api-action';
import {FavoriteData} from '../../types/favs-film-data';

type MyListBtnProps = {
  filmID: string;
}

function MyListBtn({ filmID }: MyListBtnProps): JSX.Element {

  const favoriteFilmsLength = useAppSelector(getFavoriteFilms).length;
  const dispatch = useAppDispatch();
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
