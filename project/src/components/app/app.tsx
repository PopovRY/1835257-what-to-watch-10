import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../consts';
import LoginPage from '../../pages/login/login-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PrivateRoute from '../private-route/private-route';
import PlayerPage from '../../pages/player/player-page';
import AddReviewPage from '../../pages/add-rewiew/add-review-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MoviePage from '../../pages/movie-page/movie-page';
import {useAppSelector} from '../../hooks';


function App(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element ={<MainPage/>}
        />
        <Route
          path={AppRoute.SignIn}
          element ={<LoginPage/>}
        />
        <Route
          path={AppRoute.MyList}
          element ={
            <PrivateRoute>
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
            <PrivateRoute>
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
