import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddProperties from '../components/pages/AddProperties';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

it('renders Property form correctly', () => {
  render(
    <Router>
      <Provider store={store}>
        <AddProperties />
      </Provider>
    </Router>,
  );

  expect(screen.getByText('Form that allows users to add a property')).toBeInTheDocument();
  expect(screen.getByText('Name:')).toBeInTheDocument();
  expect(screen.getByText('Image URL:')).toBeInTheDocument();
  expect(screen.getByText('Location:')).toBeInTheDocument();
  expect(screen.getByText('Price: $')).toBeInTheDocument();
  expect(screen.getByText('Add Property')).toBeInTheDocument();
});
