import React from 'react';

import UpcomingEvents from './partials/UpcomingEvents';

const Home: React.FC = () => (
  <div>
    <UpcomingEvents events={[{ name: 'First event' }, { name: 'Second event' }]} />
  </div>
);

export default Home;
