import { GetQueryInterface } from 'interfaces';

export interface TripPlanInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TripPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
}
