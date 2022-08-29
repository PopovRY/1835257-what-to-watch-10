import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import FilmCard from '../../components/film-card/film-card';
import {getFavoriteFilms, getLoadingDataStatus} from '../../store/films-process/selectors';
import {useEffect} from 'react';
import {fetchFavorites} from '../../store/api-action';
import PreLoader from '../../components/pre-loader/pre-loader';


function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilmsLength = useAppSelector(getFavoriteFilms).length;
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isDataLoader = useAppSelector(getLoadingDataStatus);
  const filmsList =
    favoriteFilms?.map((film) => (
      <FilmCard key={film.id}
        film={film}
      />
    ));

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className="user-page">
      { isDataLoader ? <PreLoader /> : '' }
      <Header
        isMyList
        favoriteCount={favoriteFilmsLength}
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filmsList}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
