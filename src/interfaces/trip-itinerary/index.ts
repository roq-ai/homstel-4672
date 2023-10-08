import { GetQueryInterface } from 'interfaces';

export interface TripItineraryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TripItineraryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
