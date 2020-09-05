import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders without crashing', () => {
    render(<TodoList />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

test('adds todo on "add" click', () => {
    const { getByText } = render(<TodoList />);
    const addButton = getByText("Add");
    fireEvent.click(addButton);
    const x = getByText("X");
    expect(x).toBeInTheDocument();
});