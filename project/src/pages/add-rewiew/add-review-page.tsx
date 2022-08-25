import {Link, useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import SendingReviewsForm from '../../components/send-review/send-review';
import NotFoundPage from '../not-found-page/not-found-page';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilm, logoutAction} from '../../store/api-action';
import {selectFilm} from '../../store/film-process/selectors';


function AddReviewPage(): JSX.Element {
  const params = useParams();
  const film = useAppSelector(selectFilm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilm(params.id));
  }, [dispatch, params.id]);

  if (!film.name) {
    return <NotFoundPage />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.posterImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film?.id}`} className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
                to="#"
                className="user-block__link"
              >Sign out
              </Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img key={film?.id} src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <SendingReviewsForm key={film.id} />

      </div>

    </section>
  );
}

export default AddReviewPage;
