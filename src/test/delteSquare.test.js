import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DeleteSquare } from '../components/DeleteSquare';


describe('DeleteSquare component', () => {
    const mockProperty = {
      id: 1,
      name: 'Ile save',
      price: 100,
      location: 'Save',
      image: 'image1.jpg',
    };

    test('Renders property details correctly', () => {
      render(
        <DeleteSquare
          name={mockProperty.name}
          location={mockProperty.location}
          price={mockProperty.price}
          image={mockProperty.image}
          onClick={() => {}}
        />
      );

      // Assert that property details are rendered correctly
    expect(screen.getByText('Save')).toBeInTheDocument();

    });

    test('Calls onClick handler when Delete button is clicked', () => {
      const mockOnClick = jest.fn();
      render(
        <DeleteSquare
          name={mockProperty.name}
          location={mockProperty.location}
          price={mockProperty.price}
          image={mockProperty.image}
          onClick={mockOnClick}
        />
      );

      // Find the Delete button and simulate a click
      const deleteButton = screen.getByText('Delete');
      fireEvent.click(deleteButton);

      // Assert that the onClick handler was called
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
