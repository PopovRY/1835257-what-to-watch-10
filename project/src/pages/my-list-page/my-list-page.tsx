import Footer from '../../components/footer/footer';
import FilmsList from '../../components/film-list/films-list';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';


function MyListPage(): JSX.Element {
  const favoriteFilmsLength = useAppSelector((state) => state.films).filter((filmA) => filmA.isFavorite).length;
  const films = useAppSelector((state) => state.films).filter((film) => film.isFavorite);

  return (


    <div className="user-page">
      <Header
        isMyList
        favoriteCount={favoriteFilmsLength}
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={films} />
        </div>
      </section>

      <Footer />
    </div>

  );
}

export default MyListPage;
