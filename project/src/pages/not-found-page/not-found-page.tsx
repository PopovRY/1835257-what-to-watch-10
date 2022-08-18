import {Link} from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-header.jpg" alt="Some background" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

      </section>
      <div>
        <p>404 Not Found</p>

        <Link to="/">Вернуться на главную</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
