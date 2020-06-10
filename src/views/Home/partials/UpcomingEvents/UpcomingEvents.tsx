import React from 'react';

import SingleEvent, { SingleEventProps } from './SingleEvent';

// If the export is neccessary
export interface UpcomingEventsProps {
  events: SingleEventProps[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => (
  <div>
    {events.map(({ name }) => (
      <SingleEvent key={name} name={name} />
    ))}
  </div>
);

export default UpcomingEvents;
