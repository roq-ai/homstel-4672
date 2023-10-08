import queryString from 'query-string';
import { UserHistoryInterface, UserHistoryGetQueryInterface } from 'interfaces/user-history';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserHistories = async (
  query?: UserHistoryGetQueryInterface,
): Promise<PaginatedInterface<UserHistoryInterface>> => {
  return fetcher('/api/user-histories', {}, query);
};

export const createUserHistory = async (userHistory: UserHistoryInterface) => {
  return fetcher('/api/user-histories', { method: 'POST', body: JSON.stringify(userHistory) });
};

export const updateUserHistoryById = async (id: string, userHistory: UserHistoryInterface) => {
  return fetcher(`/api/user-histories/${id}`, { method: 'PUT', body: JSON.stringify(userHistory) });
};

export const getUserHistoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/user-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteUserHistoryById = async (id: string) => {
  return fetcher(`/api/user-histories/${id}`, { method: 'DELETE' });
};
