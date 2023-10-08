import { GetQueryInterface } from 'interfaces';

export interface ExperienceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ExperienceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
