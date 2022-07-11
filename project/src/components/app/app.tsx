import MainPage from '../../pages/main-page/main-page';

type MainPageProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

function App({ title, genre, releaseDate }: MainPageProps): JSX.Element {
  return (
    <MainPage title={title} genre={genre} releaseDate={releaseDate} />);
}

export default App;
