import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "../component/AddTodo"; 
import '@testing-library/jest-dom/extend-expect'; 

describe('AddTodo component', () => {
  test('adds a task when the add button is clicked', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} />);
    
    const inputTask = screen.getByLabelText(/Add New Item/i);
    const inputDate = screen.getByLabelText(/Due Date/i);
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.change(inputTask, { target: { value: 'New Task' } });
    fireEvent.change(inputDate, { target: { value: '05/30/2023' } });
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledWith({
      content: 'New Task',
      date: expect.any(String),
      due: '5/30/2023'
    });
  });

  test('does not add duplicate tasks', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} />);
    
    const inputTask = screen.getByLabelText(/Add New Item/i);
    const inputDate = screen.getByLabelText(/Due Date/i);
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.change(inputTask, { target: { value: 'New Task' } });
    fireEvent.change(inputDate, { target: { value: '05/30/2023' } });
    fireEvent.click(addButton);
    fireEvent.change(inputTask, { target: { value: 'New Task' } });
    fireEvent.change(inputDate, { target: { value: '05/30/2023' } });
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
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} />);
    
    const inputTask = screen.getByLabelText(/Add New Item/i);
    const inputDate = screen.getByLabelText(/Due Date/i);
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.change(inputTask, { target: { value: 'Overdue Task' } });
    fireEvent.change(inputDate, { target: { value: '05/30/2022' } });
    fireEvent.click(addButton);

    const overdueTask = screen.getByText(/Overdue Task/i);
    expect(overdueTask.closest('div')).toHaveStyle('background-color: #ffcccc');
  });
});
