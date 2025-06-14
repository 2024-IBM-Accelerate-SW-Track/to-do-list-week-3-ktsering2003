import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from './AddTodo'; // Correct the import path
import '@testing-library/jest-dom/extend-expect';

describe('AddTodo component', () => {
  test('renders AddTodo component', () => {
    render(<AddTodo addTodo={jest.fn()} />);
    const inputTask = screen.getAllByLabelText(/Add New Item/i).find(el => el.tagName.toLowerCase() === 'input');
    expect(inputTask).toBeInTheDocument();
  });

  test('overdue tasks have a different color', () => {
    const { container } = render(<AddTodo addTodo={jest.fn()} />);
    // Add further assertions to verify overdue tasks styling
  });
});
