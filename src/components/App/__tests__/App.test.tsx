import React from 'react';

import { shallow } from 'enzyme';

import App from 'components/App';

describe('App [component] ->', () => {
  it('Should render correctly', () => {
    const output = shallow(<App />);

    expect(output).toMatchSnapshot();
  });
});
