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
import PreLoader from '../pre-loader/pre-loader';
import {getLoadingDataStatus} from '../../store/films-process/selectors';
import {getAuth} from '../../store/user-process/selectors';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getLoadingDataStatus);
  const authorizationStatus = useAppSelector(getAuth);
  if (isDataLoaded) {
    return (
      <PreLoader />
    );
  }

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
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element ={<MoviePage/>}
        />
        <Route
          path={AppRoute.AddReview}
          element ={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReviewPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element ={<PlayerPage />}
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
