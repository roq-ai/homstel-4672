import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
