import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders without crashing', () => {
    render(<NewTodoForm />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

test('renders all parts of form', () => {
    const { getByText, getByPlaceholderText } = render(<NewTodoForm />);
    const input = getByPlaceholderText("Add New Task")
    const addButton = getByText("Add");
    expect(input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
});