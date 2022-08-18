import React, {FormEvent} from 'react';
import { useState } from 'react';
import {AppRoute, DEFALUT_RATING_VALUE} from '../../consts';
import {useAppDispatch} from '../../hooks';
import {useNavigate, useParams} from 'react-router-dom';
import {addReviewAction} from '../../store/api-action';

function SendingReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(DEFALUT_RATING_VALUE);

  const onReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const sendingFormData = {
      rating: Number(rating),
      comment: comment,
    };

    if (rating && comment) {
      dispatch(addReviewAction([params?.id, sendingFormData]));
      navigate(`${AppRoute.Films}${params?.id}`);
    }
  };

  const starsButtonList = Array.from({ length: 10 }, (_, i) => {
    const key = String(10 - i);

    return (
      <React.Fragment key={`${i}`}>
        <input
          className="rating__input"
          id={`star-${key}`}
          type="radio"
          name="rating"
          value={`${key}`}
          onChange={(evt) => setRating(Number(evt.currentTarget.value))}
        />
        <label
          className="rating__label"
          htmlFor={`star-${key}`}
        >{`Rating ${key}`}
        </label>
      </React.Fragment>);
  });

  return (
    <form action="#" className="add-review__form" onSubmit={onReviewFormSubmit}>
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
