import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import { Delete } from '../components/pages/Delete';
import '@testing-library/jest-dom/extend-expect';

describe('Delete page', () => {
  test('Renders the app when there is nothing to show', () => {
    render(
      <Router>
        <Provider store={store}>
          <Delete />
        </Provider>
      </Router>,
    );
    const pageTitle = screen.getByText('Remove properties');
    expect(pageTitle).toBeInTheDocument();

    const displaymsg = screen.getByText('Nothing to show');
    expect(displaymsg).toBeInTheDocument();
  });
});
