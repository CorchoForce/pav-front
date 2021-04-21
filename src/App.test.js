import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import User from './pages/User';

test('renders learn react link', () => {
  render(<App />);
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
  const linkElement = screen.getByText(/Not Founded/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders search route', () => {
  render(<Search />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});