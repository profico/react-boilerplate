import React from 'react';
import App from 'components/App';

import { shallow } from 'enzyme';

describe('App [component] ->', () => {
  it('Should render correctly', () => {
    const output = shallow(<App />);

    expect(output).toMatchSnapshot();
  });
});
