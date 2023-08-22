import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import Home from '../components/pages/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Currencies content', () => {
  test('Render Correct Details', () => {
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );
    const pageTitle = screen.getByText('Home Page');
    expect(pageTitle).toBeInTheDocument();
  });
});
