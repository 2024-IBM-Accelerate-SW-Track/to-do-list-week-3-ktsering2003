import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App'; 

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test that App component renders', () => {
  render(<App />, container);
  const linkElement = screen.getByRole('heading', { name: /Todo's/i });
  expect(linkElement).toBeInTheDocument();
});

test('test that new-item-button is a button', () => {
  render(<App />, container);
  const element = screen.getByTestId('new-item-button');
  expect(element.tagName.toLowerCase()).toBe("button");
});

test('test that new-item-input is an input', () => {
  render(<App />, container);
  const elements = screen.getAllByLabelText(/Add New Item/i);
  const inputElement = elements.find(el => el.tagName.toLowerCase() === 'input');
  expect(inputElement).toBeInTheDocument();
});
