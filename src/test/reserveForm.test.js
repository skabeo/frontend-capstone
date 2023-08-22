import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReserveForm from '../components/pages/ReserveForm';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

it('renders ReserveForm correctly', () => {
  render(
    <Router>
      <Provider store={store}>
        <ReserveForm />
      </Provider>
    </Router>,
  );

  expect(screen.getByText('Reserve Form')).toBeInTheDocument();
  expect(screen.getByText('Choose a Property')).toBeInTheDocument();
  expect(screen.getByText('Reserve')).toBeInTheDocument();
});
