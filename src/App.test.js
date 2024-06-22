import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App'; 

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders App component', () => {
  render(<App />, container);
});

test('new-item-button is a button element', () => {
  render(<App />, container);
  const element = screen.getByTestId('new-item-button');
  expect(element.tagName.toLowerCase()).toBe('button');
});

test('new-item-input is an input element', () => {
  render(<App />, container);
  const element = screen.getByLabelText('Add New Item');
  expect(element.tagName.toLowerCase()).toBe('input');
});
