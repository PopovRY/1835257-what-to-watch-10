import Review from '../review/review';
import {ReviewType} from '../../types/comments';

type ReviewsProps = {
  reviews: ReviewType[] | [];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
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
