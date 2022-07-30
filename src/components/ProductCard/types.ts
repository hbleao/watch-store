export type ProductProps = {
  title: string;
  price: string;
  image: string;
}

export type ProductCardProps = {
  product: ProductProps;
  addToCart: (product: ProductProps) => void;
}