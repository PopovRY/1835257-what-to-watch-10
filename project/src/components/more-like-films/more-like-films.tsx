import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type Props = {
  similarFilms: Film[];
}

function MoreLikeFilms({similarFilms}: Props) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleSetActive = (id: number) =>
    setActiveCard(id);

  const handleSetNoActive = () =>
    setActiveCard(null);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {similarFilms.map((item) => (
          <FilmCard key={item.id} film={item} activeCard={activeCard} onMouseLeave={handleSetNoActive} onMouseEnter={handleSetActive}/>
        ))}
      </div>
    </section>
  );
}

export default MoreLikeFilms;
