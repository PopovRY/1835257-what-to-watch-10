import Footer from '../../components/footer/footer';
import {useNavigate, useParams} from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import SimilarFilms from '../../components/similar-films/similar-films';
import {AuthorizationStatus, Tab} from '../../consts';
import {fetchFilm, fetchFilmComments, fetchSimilarFilms} from '../../store/api-action';
import {useEffect} from 'react';
import AddReviewButton from '../../components/review-btn/review-btn';
import {getAuth} from '../../store/user-process/selectors';
import {getFilm, getSimilarFilms} from '../../store/film-process/selectors';
import {getTab} from '../../utils';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import MyListBtn from '../../components/my-list-button/my-list-button';
import {getComments} from '../../store/add-review-process/selectors';
import PreLoader from '../../components/pre-loader/pre-loader';

function MoviePage(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuth);
  const filmComments = useAppSelector(getComments);
  const film = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms);

  const {backgroundImage, name, genre, released, id, posterImage, backgroundColor } = film;

  const filmID = String(id);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchFilm(params.id));
      dispatch(fetchSimilarFilms(params.id));
      dispatch(fetchFilmComments(params.id));
    }
  }, [dispatch, params.id]);

  const hanldleOnPlayButtonClick = () => {
    const path = `/player/${id}`;
    navigate(path);
  };

  const tab = getTab();

  const bckgColor = {
    backgroundColor: `${backgroundColor}`
  };

  if (!name) {
    return <PreLoader />;
  }

  return (
    <>
      <section className="film-card film-card--full" style={bckgColor}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={hanldleOnPlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListBtn filmID={filmID} />
                {authStatus === AuthorizationStatus.Auth && <AddReviewButton id={id} />}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs />

              {
                tab === Tab.Overview &&
                <Overview film={film} />
              }

              {
                tab === Tab.Details &&
                <Details film={film} />
              }

              {
                tab === Tab.Reviews &&
                <Reviews reviews={filmComments} />
              }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarFilms similarFilms={similarFilms} />
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
