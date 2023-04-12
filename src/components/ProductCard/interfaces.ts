import { useProduct } from "../../hooks/useProduct";

export interface Product{
  id: string,
  title: string,
  img?: string;
}

type useProductReturn = ReturnType<typeof useProduct>;
export interface ProductContextProps extends useProductReturn{
  product: Product
}

export interface ProductCardOnChangeArgs {
  product: Product,
  count: number
}