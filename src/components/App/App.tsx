import React from 'react';
import Home from 'views/Home';
import { ConfigurationBuilder } from 'config';

ConfigurationBuilder.buildConfiguration();

const App: React.FC = () => (
  <div>
    <Home />
  </div>
);

export default App;
