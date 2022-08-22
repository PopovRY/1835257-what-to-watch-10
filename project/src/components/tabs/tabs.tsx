import {getTab} from '../../utils';
import classNames from 'classnames';
import {Tab} from '../../consts';
import {Link} from 'react-router-dom';


function Tabs(): JSX.Element {
  const tab = getTab();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={classNames('film-nav__item', {
          'film-nav__item--active':
              tab === Tab.Overview
        }
        )}
        >
          <Link to={`?tab=${Tab.Overview}`} className="film-nav__link">Overview</Link>
        </li>
        <li className={classNames('film-nav__item', {
          'film-nav__item--active':
              tab === Tab.Details
        }
        )}
        >
          <Link to={`?tab=${Tab.Details}`} className="film-nav__link">Details</Link>
        </li>
        <li className={classNames('film-nav__item', {
          'film-nav__item--active':
              tab === Tab.Reviews
        }
        )}
        >
          <Link to={`?tab=${Tab.Reviews}`} className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>

  );
}

export default Tabs;
