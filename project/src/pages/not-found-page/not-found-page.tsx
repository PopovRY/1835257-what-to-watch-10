import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <section className="not__found__page">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundPage;
