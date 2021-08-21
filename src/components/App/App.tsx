import React from 'react';

import Home from '../../views/Home';

import { EnvironmentConfig } from '../../config/environment';

EnvironmentConfig.buildConfig();

const App: React.FC = () => (
  <div>
    <Home />
  </div>
);

export default App;
