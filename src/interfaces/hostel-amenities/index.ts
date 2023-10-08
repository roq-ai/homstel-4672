import { GetQueryInterface } from 'interfaces';

export interface HostelAmenitiesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface HostelAmenitiesGetQueryInterface extends GetQueryInterface {
  id?: string;
}
