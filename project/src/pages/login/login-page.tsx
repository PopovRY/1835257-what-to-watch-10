import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}


export default LoginPage;
