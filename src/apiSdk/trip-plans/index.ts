import queryString from 'query-string';
import { TripPlanInterface, TripPlanGetQueryInterface } from 'interfaces/trip-plan';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTripPlans = async (
  query?: TripPlanGetQueryInterface,
): Promise<PaginatedInterface<TripPlanInterface>> => {
  return fetcher('/api/trip-plans', {}, query);
};

export const createTripPlan = async (tripPlan: TripPlanInterface) => {
  return fetcher('/api/trip-plans', { method: 'POST', body: JSON.stringify(tripPlan) });
};

export const updateTripPlanById = async (id: string, tripPlan: TripPlanInterface) => {
  return fetcher(`/api/trip-plans/${id}`, { method: 'PUT', body: JSON.stringify(tripPlan) });
};

export const getTripPlanById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/trip-plans/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTripPlanById = async (id: string) => {
  return fetcher(`/api/trip-plans/${id}`, { method: 'DELETE' });
};
