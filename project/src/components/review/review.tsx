import {ReviewType} from '../../types/comments';
import dayjs from 'dayjs';

type ReviewProps = {
  review: ReviewType;
}

function Review({ review }: ReviewProps): JSX.Element {
  const { comment, rating, date, user } = review;
  const getHumanizeDate = () => dayjs(date).format('MMMM DD, YYYY');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{getHumanizeDate()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(1)}</div>
    </div>
  );
}

export default Review;
