import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders without crashing', () => {
    render(<Todo />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

test("runs the delete function on button click", function () {
    const remove = jest.fn();
    const { getByText } = render(<Todo remove={remove} />);
    const removeButton = getByText("X");
    fireEvent.click(removeButton);
    expect(remove).toHaveBeenCalled();
});