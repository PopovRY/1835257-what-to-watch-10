import {useParams} from 'react-router-dom';
import SendingReviewsForm from '../../components/send-review/send-review';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilm} from '../../store/api-action';
import {getFilm} from '../../store/film-process/selectors';
import Header from '../../components/header/header';


function AddReviewPage(): JSX.Element {
  const params = useParams();
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();

  const {posterImage, name, id,} = film;

  useEffect(() => {
    dispatch(fetchFilm(params.id));
  }, [dispatch, params.id]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={posterImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__poster film-card__poster--small">
          <img key={id} src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <SendingReviewsForm key={id} />

      </div>

    </section>
  );
}

export default AddReviewPage;
