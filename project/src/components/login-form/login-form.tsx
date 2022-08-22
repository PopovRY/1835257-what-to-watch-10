import ErrorMessage from '../error-message/error-message';
import {FormEvent, useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {loginAction} from '../../store/api-action';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {selectAuth, selectError} from '../../store/user-process/selectors';

function LoginForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  const authStatus = useAppSelector(selectAuth);
  const navigate = useNavigate();

  const handleFromSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authStatus, navigate]);

  return (
    <form action="#" className="sign-in__form" onSubmit={handleFromSubmit}>
      {error ? <ErrorMessage /> : null}
      <div className="sign-in__fields">
        <div className={error ? 'sign-in__field sign-in__field--error' : 'sign-in__field'}>
          <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" required />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" minLength={2} required />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}

export default LoginForm;
