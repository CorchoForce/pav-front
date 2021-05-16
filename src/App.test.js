import '@testing-library/jest-dom';
import ShallowRenderer from 'react-test-renderer/shallow';

import {
  render,
  screen,
} from '@testing-library/react';


import {
  About,
  Home
} from './pages'

import {
  NotFound,
  Cards
} from './components'


test('Home renders a <Cards />', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Home />);
  const result = renderer.getRenderOutput();
  expect(result.props.children).toEqual(<Cards />);
});


test('Renders About route', () => {
  render(<About />);
  const linkElement = screen.getByText(/sobre/i, { exact: false });
  expect(linkElement).toBeInTheDocument();
});

test('Renders NotFound route', () => {
  render(<NotFound text={"any"} />);
  const linkElement = screen.getByText(/any/i, { exact: false })
  expect(linkElement).toBeInTheDocument();
});