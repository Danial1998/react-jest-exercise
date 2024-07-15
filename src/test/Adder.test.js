import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Adder from "../components/Adder";

test('renders add component', () => { 
    render(<Adder/>);

    const inputNum1 = screen.getByTestId('input-num1');
    const inputNum2 = screen.getByTestId('input-num2');
    const addButton = screen.getByTestId('add-button');
    const resultElement = screen.getByTestId('result');

    expect(inputNum1).toBeInTheDocument();
    expect(inputNum2).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(resultElement).toHaveTextContent('0');

 });

 test('adds two numbers', () => { 
    render(<Adder/>);

    const inputNum1 = screen.getByTestId('input-num1');
    const inputNum2 = screen.getByTestId('input-num2');
    const addButton = screen.getByTestId('add-button');
    const resultElement = screen.getByTestId('result');

    fireEvent.change(inputNum1, {target : { value: 5 }});
    fireEvent.change(inputNum2, { target: { value: 3 }});
    fireEvent.click(addButton);

    expect(resultElement).toHaveTextContent('8');

 });