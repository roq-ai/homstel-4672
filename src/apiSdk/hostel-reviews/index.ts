import queryString from 'query-string';
import { HostelReviewsInterface, HostelReviewsGetQueryInterface } from 'interfaces/hostel-reviews';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHostelReviews = async (
  query?: HostelReviewsGetQueryInterface,
): Promise<PaginatedInterface<HostelReviewsInterface>> => {
  return fetcher('/api/hostel-reviews', {}, query);
};

export const createHostelReviews = async (hostelReviews: HostelReviewsInterface) => {
  return fetcher('/api/hostel-reviews', { method: 'POST', body: JSON.stringify(hostelReviews) });
};

export const updateHostelReviewsById = async (id: string, hostelReviews: HostelReviewsInterface) => {
  return fetcher(`/api/hostel-reviews/${id}`, { method: 'PUT', body: JSON.stringify(hostelReviews) });
};

export const getHostelReviewsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/hostel-reviews/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteHostelReviewsById = async (id: string) => {
  return fetcher(`/api/hostel-reviews/${id}`, { method: 'DELETE' });
};
