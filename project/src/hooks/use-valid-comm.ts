import {useEffect, useState} from 'react';
import {CommentLength, DEFALUT_RATING_VALUE} from '../consts';

export const useValidComment = (comment: string, rating: number) => {
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  useEffect(() => {
    const validComment =
      comment.length > CommentLength.Min &&
      comment.length < CommentLength.Max;

    setIsValidForm(validComment && rating > DEFALUT_RATING_VALUE);
  }, [comment, rating]);

  return isValidForm;
};
