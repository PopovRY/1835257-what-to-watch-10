import './error-message.css';

function ErrorMessage(): JSX.Element {
  return (
    <div className="sign-in__message">
      <p>We can’t recognize this email <br /> and password combination. Please try again.</p>
    </div>
  );
}

export default ErrorMessage;
