import queryString from 'query-string';
import { TripItineraryInterface, TripItineraryGetQueryInterface } from 'interfaces/trip-itinerary';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTripItineraries = async (
  query?: TripItineraryGetQueryInterface,
): Promise<PaginatedInterface<TripItineraryInterface>> => {
  return fetcher('/api/trip-itineraries', {}, query);
};

export const createTripItinerary = async (tripItinerary: TripItineraryInterface) => {
  return fetcher('/api/trip-itineraries', { method: 'POST', body: JSON.stringify(tripItinerary) });
};

export const updateTripItineraryById = async (id: string, tripItinerary: TripItineraryInterface) => {
  return fetcher(`/api/trip-itineraries/${id}`, { method: 'PUT', body: JSON.stringify(tripItinerary) });
};

export const getTripItineraryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/trip-itineraries/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTripItineraryById = async (id: string) => {
  return fetcher(`/api/trip-itineraries/${id}`, { method: 'DELETE' });
};
