import {Films} from '../../types/films';

import FilmsList from '../film-list/films-list';

type SimilarFilmsProps = {
  similarFilms: Films[];
}

function SimilarFilms({similarFilms}: SimilarFilmsProps) {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {similarFilms.length > 0 ? <FilmsList films={similarFilms} /> : <p>Sorry, we did not find anything.</p>}
    </section>
  );
}

export default SimilarFilms;
