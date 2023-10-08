import { GetQueryInterface } from 'interfaces';

export interface HostelReviewsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface HostelReviewsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
