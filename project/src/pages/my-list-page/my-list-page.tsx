import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import FilmCard from '../../components/film-card/film-card';


function MyListPage(): JSX.Element {
  const favoriteFilmsLength = useAppSelector((state) => state.films).filter((filmA) => filmA.isFavorite).length;
  const films = useAppSelector((state) => state.films).filter((film) => film.isFavorite);

  const filmsList =
    films?.map((film) => (
      <FilmCard key={film.id}
        film={film}
      />
    ));
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
