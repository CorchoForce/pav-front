import '@testing-library/jest-dom';
import { 
    render, 
    screen
} from '@testing-library/react';

import {
    About,
    Home
} from './pages'

import {
    NotFound
} from './components'

test('Renders About route', () => {
  render(<About/>);
  const linkElement = screen.getByText(/sobre/i, { exact: false });
  expect(linkElement).toBeInTheDocument();
});

test('Renders Home route', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/loading/i, { exact: false })
  expect(linkElement).toBeInTheDocument();
});

test('Renders NotFound route', () => {
  render(<NotFound/>);
  const linkElement = screen.getByText(/página não encontrada/i, { exact: false });
  expect(linkElement).toBeInTheDocument();
});