import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo'; 
import '@testing-library/jest-dom/extend-expect'; 

describe('AddTodo component', () => {
  test('adds a task when the add button is clicked', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} />);
    
    const inputTask = screen.getByLabelText(/Add New Item/i);
    const inputDate = screen.getByLabelText(/Due Date/i);
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.change(inputTask, { target: { value: 'New Task' } });
    fireEvent.change(inputDate, { target: { value: '2024-06-21' } });
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledTimes(1);
  });

  test('does not add a task without a due date', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} />);
    
    const inputTask = screen.getByLabelText(/Add New Item/i);
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.change(inputTask, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(addTodo).not.toHaveBeenCalled();
  });

  test('overdue tasks have a different color', () => {
    // Assuming you have some logic to set class for overdue tasks
    // This would need to be implemented in your component and tested here
  });
});
