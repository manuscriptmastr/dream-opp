import React from 'react';
import Store from './index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Store />).toJSON();
  expect(rendered).toBeTruthy();
});
