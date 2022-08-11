type ShowMoreButtonProps = {
  onClick: VoidFunction
}

function ShowMoreButton({ onClick }: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );

}

export default ShowMoreButton;
