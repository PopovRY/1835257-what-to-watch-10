import {useNavigate, useParams} from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {fetchFilm} from '../../store/api-action';
import {getFilm} from '../../store/film-process/selectors';
import {PlayerProgress} from '../../consts';
import {formattingLastTime} from '../../utils';
import Spinner from '../../components/spinner/spinner';

function PlayerPage(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(PlayerProgress.Start);
  const [lastTime, setLastTime] = useState<number>(PlayerProgress.Start);
  const formatLastTime = formattingLastTime(lastTime);

  useEffect(() => {
    dispatch(fetchFilm(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    isPlaying
      ? videoRef.current?.play()
      : videoRef.current?.pause();
  }, [isPlaying]);

  const handleOnExitButtonClick = () => {
    const path = `/films/${film.id}`;
    navigate(path);
  };

  const initVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = PlayerProgress.Start;
      togglePlay();
    }
  };

  const toggleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current?.currentTime / videoRef.current?.duration) * PlayerProgress.End;
      setProgress(currentProgress);
      setLastTime(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  const handleVideoProgress = (evt: ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(evt.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current?.duration / PlayerProgress.End) * manualChange;
      setProgress(manualChange);
    }
  };

  const handleEndPlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = PlayerProgress.Start;
      setIsPlaying(false);
    }
  };

  if (!film.name) {
    return <NotFoundPage />;
  }

  return (
    <div className="player">
      <video className="player__video"
        ref={videoRef}
        src={film.videoLink}
        poster={film.previewImage}
        onLoadedMetadata={initVideo}
        onTimeUpdate={handleTimeUpdate}
        onSeeking={() => setIsLoading(true)}
        onSeeked={() => setIsLoading(false)}
        onEnded={handleEndPlay}
      >
      </video>

      <button type="button" className="player__exit" onClick={handleOnExitButtonClick}>Exit</button>

      {
        isLoading &&
        <span>
          <Spinner />
        </span>
      }

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <input
              className="player__progress"
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(evt) => handleVideoProgress(evt)}
            />
            <progress
              className="player__progress"
              value={progress}
              max="100"
            />
          </div>
          <div className="player__time-value">{formatLastTime}</div>
        </div>

        <div className="player__controls-row">
          {
            isPlaying
              ? (
                <button
                  type="button"
                  className="player__play"
                  onClick={() => togglePlay()}
                >
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause" />
                  </svg>
                  <span>Pause</span>
                </button>
              )
              : (
                <button
                  type="button"
                  className="player__play"
                  onClick={() => togglePlay()}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
              )
          }
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={toggleFullscreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
