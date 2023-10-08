interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Team Member', 'Travel Agent'],
  tenantName: 'Company',
  applicationName: 'Homstel',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View hostel amenities',
    'View experience reviews',
    'View hostel reviews',
    'View trip itineraries',
  ],
  ownerAbilities: [
    'Manage hostel amenities',
    'Manage user history',
    'Manage experience reviews',
    'Manage hostel reviews',
    'Manage trip itinerary',
    'Manage user preferences',
    'Manage experiences',
    'Manage trip plans',
    'Manage hostels',
    'Manage bookings',
    'Manage user accounts',
    'Manage company details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f5d53b58-8ab4-4e17-b577-9e06f1d375e2',
};
