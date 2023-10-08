const mapping: Record<string, string> = {
  bookings: 'booking',
  companies: 'company',
  experiences: 'experience',
  'experience-reviews': 'experience_reviews',
  hostels: 'hostel',
  'hostel-amenities': 'hostel_amenities',
  'hostel-reviews': 'hostel_reviews',
  'trip-itineraries': 'trip_itinerary',
  'trip-plans': 'trip_plan',
  users: 'user',
  'user-histories': 'user_history',
  'user-preferences': 'user_preferences',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
