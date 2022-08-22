import classNames from 'classnames';
import './genre-button.css';

type GenreButtonProps = {
  genre: string;
  isActive: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

function GenreButton({ genre, isActive, onClick }: GenreButtonProps): JSX.Element {
  return (
    <li
      className={classNames('catalog__genres-item', isActive ? 'catalog__genres-item--active' : '')}
      onClick={onClick}
    >
      <button className="catalog__genres-link">{genre}</button>
    </li>
  );
}

export default GenreButton;
