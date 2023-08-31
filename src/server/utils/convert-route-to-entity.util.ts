const mapping: Record<string, string> = {
  appointments: 'appointment',
  calendars: 'calendar',
  companies: 'company',
  roles: 'role',
  'time-slots': 'time_slot',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
