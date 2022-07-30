import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { CartItem } from '.';
import { CartItemProps } from './types';

const makeSut = ({ product }: CartItemProps) => {
  const sut = render(<CartItem product={product} />);

  return { sut };
}

const product = {
  title: 'Relógio branco',
  price: '22,00',
  image: "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
}

describe('CartItem', () => {
  it('should render a cartItem', () => {
    makeSut({ product });

    const cardElement = screen.getByTestId('cart-item');

    expect(cardElement).toBeInTheDocument();
  });

  it('should display proper content', () => {
    makeSut({ product });

    const cardTitle = screen.getByText(new RegExp(product.title, 'i'));
    const cardPrice = screen.getByText(new RegExp(product.price, 'i'));
    const cardImage = screen.getByTestId('image');

    expect(cardTitle).toBeInTheDocument();
    expect(cardPrice).toBeInTheDocument();
    expect(cardImage).toHaveStyle({
      backgroundImage: product.image
    });
    expect(cardImage).toHaveAttribute('alt', product.title);
  });

  it('should display 1 as initial quantity', () => {
    makeSut({ product });

    const quantityElement = screen.getByTestId('quantity');

    expect(quantityElement.textContent).toBe('1');
  });

  it('should increase quantity by 1 when second button is clicked', async () => {
    makeSut({ product });

    const buttonIncrease = screen.getByTestId('increase');
    const quantityElement = screen.getByTestId('quantity');

    await fireEvent.click(buttonIncrease);

    expect(quantityElement.textContent).toBe('2');
  });

  it('should decrease quantity by 1 when first button is clicked', () => {
    makeSut({ product });

    const buttonIncrease = screen.getByTestId('increase');
    const buttonDecrease = screen.getByTestId('decrease');
    const quantityElement = screen.getByTestId('quantity');

    fireEvent.click(buttonIncrease);
    fireEvent.click(buttonIncrease);
    fireEvent.click(buttonIncrease);
    fireEvent.click(buttonDecrease);

    expect(quantityElement.textContent).toBe('3');
  });

  it('should not go below zero in the quantity', () => {
    makeSut({ product });

    const quantityElement = screen.getByTestId('quantity');
    const buttonDecrease = screen.getByTestId('decrease');

    fireEvent.click(buttonDecrease);
    fireEvent.click(buttonDecrease);

    expect(quantityElement.textContent).toBe('0');
  });
});