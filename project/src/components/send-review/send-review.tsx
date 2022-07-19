import { useState } from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */

function SendingReviewsForm(): JSX.Element {
  const DEFALUT_RATING_VALUE = 0;
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(DEFALUT_RATING_VALUE);

  const starsButtonList = Array.from({ length: 10 }, (_, i) => {
    const key = String(10 - i);

    return (
      <>
        <input className="rating__input" id={`star-${key}`} type="radio" name="rating" value={`${key}`} onChange={(evt) => setRating(Number(evt.currentTarget.value))} />
        <label className="rating__label" htmlFor={`star-${key}`}>{`Rating ${key}`}</label>
      </>);
  });

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {starsButtonList}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(evt) => setComment(evt.currentTarget.value)}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default SendingReviewsForm;
