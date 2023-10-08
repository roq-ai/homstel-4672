import { GetQueryInterface } from 'interfaces';

export interface UserHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
