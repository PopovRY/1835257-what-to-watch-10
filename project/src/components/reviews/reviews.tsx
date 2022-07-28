import Review from '../review/review';
import {reviews} from '../../mocks/reviews';


function Reviews(): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          reviews.map((review) =>
            <Review key={review.id} review={review} />)
        }
      </div>
    </div>
  );
}

export default Reviews;
