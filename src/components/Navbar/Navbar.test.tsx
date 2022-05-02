import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Should write the text passed by props', () => {
    const text = "ishouldbehere";
    render(<Navbar text={text} />);
    const textThatShouldBeOnScreen = screen.getByText(text);
    expect(textThatShouldBeOnScreen).toBeInTheDocument();
});


test('Should write the default text if no text is provided in props', () => {
    render(<Navbar />);
    const textThatShouldBeOnScreen = screen.getByText("My todo app");
    expect(textThatShouldBeOnScreen).toBeInTheDocument();
});
