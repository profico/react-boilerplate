/*
  - src/containers/OrganizationContainer

  // Define all available routes outside the component
  type OrganizationView =
    | 'home'
    | 'bookings'
    | 'members'
    | 'reports'
    | 'dedicated-cars'
    | 'settings'
    | 'help'
    | 'join';

  type OrganizationViewMap = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [view in OrganizationView]: React.ComponentType<any>;
  };

  const organizationViewsMap: OrganizationViewMap = {
    home: Home,
    bookings: Bookings,
    members: Members,
    reports: Reports,
    settings: Settings,
    help: Help,
    'dedicated-cars': DedicatedCars,
    join: InvitationByLink,
  };

  // Inside the component
  const View = organizationViewsMap[params.view as OrganizationView];

  if (View) {
    return <View />;
  }

  return <NotFound />;
*/
export default {};
