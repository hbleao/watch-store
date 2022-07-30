import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Server } from 'miragejs';

import { Home } from '.';
import { makeServer } from '@/../miragejs/server';

const makeSut = () => {
  const sut = render(<Home />);

  return { sut };
}

describe('Home', () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render ProductList', () => {
    makeSut();

    const homeElement = screen.getByTestId('product-list');

    expect(homeElement).toBeInTheDocument();
  });

  it('should render the ProductCard component 10 times', () => {
    server.createList('product', 10);
    makeSut();

    waitFor(() => {
      const products = screen.getAllByTestId('product-card');
      expect(products).toHaveLength(10);
    })
  });

  it.todo('should render the "no products" message');
  it.todo('should render the Search component');
  it.todo('should filter the product list when a search is performed');
  it.todo('should display "error message" when promise rejects');
  it.todo('should display the total quantity of products');
  it.todo('should display product (singular) when there is only product');
});