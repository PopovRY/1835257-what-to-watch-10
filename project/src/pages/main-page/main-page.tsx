import Footer from '../../components/footer/footer';
import FilmsListMain from '../../components/films-list-main/films-list-main';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {selectFilms} from '../../store/films-process/selectors';
import {selectPromoFilm} from '../../store/promo-film-process/selectors';
import GenreTabs from '../../components/genre-tabs/genre-tabs';
import MyListBtn from '../../components/my-list-button/my-list-button';

function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const films = useAppSelector(selectFilms);
  const promoFilm = useAppSelector(selectPromoFilm);
  const { name, backgroundImage, posterImage, genre, released } = promoFilm;

  const playButtonClickHandler = () => {
    const path = '/player/1';
    navigate(path);
  };

  return (
    <>
      <section className="film-card" >
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={playButtonClickHandler}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListBtn />
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
