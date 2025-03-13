import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../src/components/LoginForm';

test('renders login form', () => {
  render(
    <Router>
      <LoginForm onLogin={jest.fn()} />
    </Router>
  );
  expect(screen.getAllByText(/login/i)[0]).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test('shows error message on empty form submission', () => {
  render(
    <Router>
      <LoginForm onLogin={jest.fn()} />
    </Router>
  );
  fireEvent.click(screen.getAllByText(/login/i)[1]);
  expect(screen.getByText(/please enter both email and password/i)).toBeInTheDocument();
});