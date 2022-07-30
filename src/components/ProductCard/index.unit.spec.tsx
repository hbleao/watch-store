import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ProductCard } from './';

import { ProductCardProps } from './types';

const makeSut = ({ product, addToCart }: ProductCardProps) => {
  const sut = render(<ProductCard product={product} addToCart={addToCart} />)

  return { sut };
}

const product = {
  title: 'Relógio branco',
  price: '22,00',
  image: "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
}

const addToCart = jest.fn();

describe('ProductCard', () => {
  it('should render a productCard', () => {
    makeSut({ product, addToCart });

    const cardElement = screen.getByTestId('product-card');

    expect(cardElement).toBeInTheDocument();
  });

  it('should display proper content', () => {
    makeSut({ product, addToCart });

    const cardTitle = screen.getByText(new RegExp(product.title, 'i'));
    const cardPrice = screen.getByText(new RegExp(product.price, 'i'));
    const cardImage = screen.getByTestId('image');

    expect(cardTitle).toBeInTheDocument();
    expect(cardPrice).toBeInTheDocument();
    expect(cardImage).toHaveStyle({
      backgroundImage: product.image
    });
  });

  it('should call props.addToCart() when button gets clicked', () => {
    makeSut({ product, addToCart });

    const buttonAddToCart = screen.getByRole('button');
    
    fireEvent.click(buttonAddToCart);

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});