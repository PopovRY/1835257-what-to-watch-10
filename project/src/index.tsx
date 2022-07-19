import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';


const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={Setting.TITLE}
      genre={Setting.GENRE}
      releaseDate={Setting.RELEASE_DATE}
      films = {films}
    />
  </React.StrictMode>,
);
