import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="center">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>);
}

export default Spinner;
