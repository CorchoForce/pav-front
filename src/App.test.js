import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import User from './pages/User';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders about route', () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders user route', () => {
  render(<User />);
  const linkElement = screen.getByText(/User/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders notfound route', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/Page not founded/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search route', () => {
  render(<Search />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});