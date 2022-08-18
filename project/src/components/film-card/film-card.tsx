import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {useEffect, useRef, useState} from 'react';

const PLAY_TIMEOUT = 1000;

type FilmCardProps = {
  film: Film;
}

export function FilmCard({film}: FilmCardProps): JSX.Element {

  const { id, previewImage, previewVideoLink, name } = film;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        videoRef.current?.play();
      }
    }, PLAY_TIMEOUT);
    if (!isPlaying) {
      videoRef.current?.pause();
      videoRef.current?.load();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isPlaying]);


  return (
    <article className={'small-film-card catalog__films-card'} onMouseOver={() => {
      setIsPlaying(true);
    }} onMouseOut={() => {
      setIsPlaying(false);
    }}
    >
      <div className="small-film-card__image">
        <video
          src={previewVideoLink}
          poster={previewImage}
          loop
          muted
          ref={videoRef}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} title={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
