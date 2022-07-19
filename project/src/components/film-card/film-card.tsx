import {Link} from 'react-router-dom';

type FilmCardProps = {
  id: number;
  previewImage: string;
  name: string;
  setActiveCard: (id: number) => void;
}

export function FilmCard({id, previewImage, name, setActiveCard}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActiveCard(id)}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} title={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
