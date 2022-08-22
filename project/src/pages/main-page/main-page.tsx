import Footer from '../../components/footer/footer';
import FilmsListMain from '../../components/films-list-main/films-list-main';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {selectFavoriteFilms, selectFilms} from '../../store/films-process/selectors';
import {selectPromoFilm} from '../../store/promo-film-process/selectors';
import GenreTabs from '../../components/genre-tabs/genre-tabs';

function MainPage(): JSX.Element {
  const navigate = useNavigate();

  const favoriteFilmsLength = useAppSelector(selectFavoriteFilms).length;
  const films = useAppSelector(selectFilms);
  const promoFilm = useAppSelector(selectPromoFilm);

  const myListButtonClickHandler = () => {
    const path = '/mylist';
    navigate(path);
  };

  const playButtonClickHandler = () => {
    const path = '/player/1';
    navigate(path);
  };

  return (
    <>
      <section className="film-card" >
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={playButtonClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={myListButtonClickHandler}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsLength}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreTabs />
          <FilmsListMain films={films} />

        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
