import {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Navigate} from 'react-router-dom';
import {loginAction} from '../../store/api-action';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {getAuth, getError, getIsLoginSending} from '../../store/user-process/selectors';
import {signInValidator} from '../../utils';
import {setError} from '../../store/user-process/user-process';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);
  const authStatus = useAppSelector(getAuth);
  const isSending = useAppSelector(getIsLoginSending);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const handleFromSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const validError = signInValidator(email, password);

    if (validError) {
      dispatch(setError(validError));
    } else {
      dispatch(loginAction({ login: email, password }));
    }
  };

  if (authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <form action="#" className="sign-in__form" onSubmit={handleFromSubmit}>
      {error &&
        <div className="sign-in__message">
          <p data-testid="auth-error">{error}</p>
        </div>}
      <div className="sign-in__fields">
        <div className='sign-in__field'>
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            data-testid="user-email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            disabled={isSending}
            required
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            data-testid="user-password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit"
          disabled={isSending}
        >
          {
            !isSending
              ? 'Sign In'
              : 'Sending...'
          }
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
