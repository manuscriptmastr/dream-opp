import React from 'react';
import Provider from './index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Provider />).toJSON();
  expect(rendered).toBeTruthy();
});
