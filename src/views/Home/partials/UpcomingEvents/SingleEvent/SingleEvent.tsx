import React from 'react';

export interface SingleEventProps {
  name: string;
}

const SingleEvent: React.FC<SingleEventProps> = ({ name }) => <h5>{name}</h5>;

export default SingleEvent;
