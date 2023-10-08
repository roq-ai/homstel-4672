import queryString from 'query-string';
import { HostelAmenitiesInterface, HostelAmenitiesGetQueryInterface } from 'interfaces/hostel-amenities';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHostelAmenities = async (
  query?: HostelAmenitiesGetQueryInterface,
): Promise<PaginatedInterface<HostelAmenitiesInterface>> => {
  return fetcher('/api/hostel-amenities', {}, query);
};

export const createHostelAmenities = async (hostelAmenities: HostelAmenitiesInterface) => {
  return fetcher('/api/hostel-amenities', { method: 'POST', body: JSON.stringify(hostelAmenities) });
};

export const updateHostelAmenitiesById = async (id: string, hostelAmenities: HostelAmenitiesInterface) => {
  return fetcher(`/api/hostel-amenities/${id}`, { method: 'PUT', body: JSON.stringify(hostelAmenities) });
};

export const getHostelAmenitiesById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/hostel-amenities/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteHostelAmenitiesById = async (id: string) => {
  return fetcher(`/api/hostel-amenities/${id}`, { method: 'DELETE' });
};
