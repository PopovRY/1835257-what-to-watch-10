import Logo from '../../components/logo/logo';
import {Film} from '../../types/film';
import {useNavigate, useParams} from 'react-router-dom';

type PlayerPageProps = {
  films: Film[];
}

function PlayerPage({films}:PlayerPageProps): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const film = films.find((filmA) => String(filmA.id) === params.id) as Film;

  const onExitButtonClickHandler = () => {
    const path = `/films/${film.id}`;
    navigate(path);
  };

  return (
    <body>
      <Logo/>

      <div className="player">
        <video src={film.previewVideoLink} className="player__video" poster={film.previewImage}></video>

        <button type="button" className="player__exit" onClick={onExitButtonClickHandler}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default PlayerPage;
