import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import LoginPage from '../../pages/login/login-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PrivateRoute from '../private-route/private-route';
import PlayerPage from '../../pages/player/player-page';
import AddReviewPage from '../../pages/add-rewiew/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';
import {Film} from '../../types/film';


type MainPageProps = {
  title: string;
  genre: string;
  releaseDate: number;
  films: Film[];

}

function App({title, genre, releaseDate, films}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element ={<MainPage title={title} genre={genre} releaseDate={releaseDate} films={films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element ={<LoginPage/>}
        />
        <Route
          path={AppRoute.MyList}
          element ={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListPage films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element ={<MoviePage films={films} />}
        />
        <Route
          path={AppRoute.AddReview}
          element ={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReviewPage films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element ={<PlayerPage films={films}/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
