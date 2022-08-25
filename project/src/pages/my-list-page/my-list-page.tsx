import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import FilmCard from '../../components/film-card/film-card';
import {selectFavoriteFilms} from '../../store/films-process/selectors';
import {useEffect} from 'react';
import {fetchFavorites} from '../../store/api-action';


function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilmsLength = useAppSelector(selectFavoriteFilms).length;
  const favsFilms = useAppSelector(selectFavoriteFilms);
  const filmsList =
    favsFilms?.map((film) => (
      <FilmCard key={film.id}
        film={film}
      />
    ));

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className="user-page">
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
