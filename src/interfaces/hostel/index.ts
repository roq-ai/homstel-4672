import { GetQueryInterface } from 'interfaces';

export interface HostelInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface HostelGetQueryInterface extends GetQueryInterface {
  id?: string;
}
