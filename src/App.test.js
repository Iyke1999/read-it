import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// Wrap App in Redux Provider for tests
const renderWithProviders = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

test('renders navbar title', () => {
  renderWithProviders(<App />);
  const heading = screen.getByText(/Reddit Clone/i);
  expect(heading).toBeInTheDocument();
});

test('renders search bar input', () => {
  renderWithProviders(<App />);
  const input = screen.getByPlaceholderText(/search posts/i);
  expect(input).toBeInTheDocument();
});

test('renders filters dropdown', () => {
  renderWithProviders(<App />);
  const select = screen.getByRole('combobox');
  expect(select).toBeInTheDocument();
});

// Suppress React Router future warnings in tests
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((msg) => {
    if (msg.includes('React Router Future Flag Warning')) return;
    console.warn(msg);
  });
});

afterAll(() => {
  console.warn.mockRestore();
});