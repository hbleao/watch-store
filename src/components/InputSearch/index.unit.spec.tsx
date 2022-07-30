import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputSearch } from '.';

describe('InputSearch', () => {
  it('should render a form', () => {
    const doSearch = jest.fn();
    render(<InputSearch doSearch={doSearch} />);

    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });

  it('should render an input equals search', async () => {
    const doSearch = jest.fn();

    render(<InputSearch doSearch={doSearch} />);

    const inputElement = screen.getByRole('searchbox');    

    expect(inputElement).toHaveProperty('type', 'search')
  });

  it('should call props.doSearch() when form is submitted', async () => {
    const doSearch = jest.fn();

    render(<InputSearch doSearch={doSearch} />);

    const formElement = screen.getByRole('form');

    await fireEvent.submit(formElement);

    expect(doSearch).toHaveBeenCalledTimes(1);
  });

  it('should call props.doSearch() with the user input', async () => {
    const doSearch = jest.fn();
    const inputText = 'Some text here';

    render(<InputSearch doSearch={doSearch} />);

    const formElement = screen.getByRole('form');
    const inputElement = screen.getByRole('searchbox');
    

    await userEvent.type(inputElement, inputText);
    await fireEvent.submit(formElement);

    expect(doSearch).toHaveBeenCalledWith(inputText);
  });
});