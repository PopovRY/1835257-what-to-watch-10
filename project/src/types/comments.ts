export type ReviewUserType = {
  id: number;
  name: string;
}

export type ReviewType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: ReviewUserType;
}

export type NewCommentType = {
  comment: string;
  rating: number;
}
