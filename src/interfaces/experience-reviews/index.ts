import { GetQueryInterface } from 'interfaces';

export interface ExperienceReviewsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ExperienceReviewsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
