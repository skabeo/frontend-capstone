import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import { configureStore } from '@reduxjs/toolkit';
import Delete from '../components/pages/Delete';
import '@testing-library/jest-dom/extend-expect';
import { ReducerWithInitialState } from '@reduxjs/toolkit/dist/createReducer';

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

  test('Render list of properties with delete buttons', () => {
    const initialState = {
        portfolio: [
          {
            id: 1,
            name: 'Royal palace',
            price: 100,
            location: 'Cotonou',
            image: 'image1.jpg',
          },
          {
            id: 2,
            name: 'Aafin Awujale',
            price: 200,
            location: 'Ijebu Ode',
            image: 'image2.jpg',
          },
        ],
      };

      const reducer = ReducerWithInitialState(initialState);



      // Mock Redux state to have the portfolio with properties
      render(
        <Router>
          <Provider store={store}>
            <Delete />
          </Provider>
        </Router>,
      );

      // Check if properties are rendered
      const Delete = screen.getByText('Delete');;
      expect(Delete).toBeInTheDocument();

      // Simulate clicking the delete button for the first property
    //   const deleteButton = screen.getAllByText('Delete')[0];
    //   fireEvent.click(deleteButton);

  });
});
