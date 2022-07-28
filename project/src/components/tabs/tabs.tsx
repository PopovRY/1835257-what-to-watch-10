import React, {useState} from 'react';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import {Film} from '../../types/film';


type TabsProps = {
  films: Film[]
}

function Tabs({films}:TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const onTabClickHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (evt.currentTarget.textContent !== null) {
      setActiveTab(evt.currentTarget.textContent);
    }
  };

  const renderFilmData = (tab: string) => {
    switch(tab) {
      case 'Overview':
        return <Overview films={films} />;
      case 'Details':
        return <Details films={films} />;
      case 'Reviews':
        return <Reviews />;
    }
  };
  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Overview</a>
          </li>
          <li className={activeTab === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Details</a>
          </li>
          <li className={activeTab === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href="/" className="film-nav__link" onClick={onTabClickHandler}>Reviews</a>
          </li>
        </ul>
      </nav>
      {renderFilmData(activeTab)}
    </>
  );
}

export default Tabs;
