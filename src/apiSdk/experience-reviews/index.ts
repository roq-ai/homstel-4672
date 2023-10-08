import queryString from 'query-string';
import { ExperienceReviewsInterface, ExperienceReviewsGetQueryInterface } from 'interfaces/experience-reviews';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExperienceReviews = async (
  query?: ExperienceReviewsGetQueryInterface,
): Promise<PaginatedInterface<ExperienceReviewsInterface>> => {
  return fetcher('/api/experience-reviews', {}, query);
};

export const createExperienceReviews = async (experienceReviews: ExperienceReviewsInterface) => {
  return fetcher('/api/experience-reviews', { method: 'POST', body: JSON.stringify(experienceReviews) });
};

export const updateExperienceReviewsById = async (id: string, experienceReviews: ExperienceReviewsInterface) => {
  return fetcher(`/api/experience-reviews/${id}`, { method: 'PUT', body: JSON.stringify(experienceReviews) });
};

export const getExperienceReviewsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/experience-reviews/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteExperienceReviewsById = async (id: string) => {
  return fetcher(`/api/experience-reviews/${id}`, { method: 'DELETE' });
};
