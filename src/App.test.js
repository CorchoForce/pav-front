import '@testing-library/jest-dom';
import { 
    render, 
    screen
} from '@testing-library/react';
import {
    About,
    Home,
    Login,
    NotFound,
    Register,
    Search,
    User
} from './pages'

test('Renders About route', () => {
  render(<About/>);
  const linkElement = screen.getByText(/Sobre/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Home route', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Login route', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/Entrar/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders NotFound route', () => {
  render(<NotFound/>);
  const linkElement = screen.getByText(/Página não encontrada/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Register route', () => {
  render(<Register/>);
  const linkElement = screen.getByText(/Cadastre-se/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Search route', () => {
  render(<Search/>);
  const linkElement = screen.getByText(/Buscar/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders User route', () => {
  render(<User/>);
  const linkElement = screen.getByText(/Usuário/i);
  expect(linkElement).toBeInTheDocument();
});
