import Logo from '../logo/logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-action';
import {AuthorizationStatus} from '../../consts';

type HeaderProps = {
  isMyList?: boolean;
  favoriteCount?: number;
}

function Header({ isMyList, favoriteCount }: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  return (
    <header className="page-header film-card__head">

      <Logo />
      {isMyList ?
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteCount}</span></h1> :
        null}


      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item" >
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li >
          <li className="user-block__item">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to="#"
              className="user-block__link"
            >Sign out
            </Link>
          </li>
        </ul >
        :
        <div className="user-block">
          <Link to='/login' title='/login' className="user-block__link">Sign in</Link>
        </div>}
    </header>
  );
}

export default Header;
