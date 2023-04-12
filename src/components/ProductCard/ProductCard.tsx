import React from "react";

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductContext } from "./ProductContext";
import { InitialValues, useProduct } from "../../hooks/useProduct";
import styles from "../../styles/styles.module.css";
import { Product, ProductCardOnChangeArgs } from "./interfaces";
import { ReactElement } from "react";





export interface ProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount?: number,
  product: Product,
  increaseBy: (v: number) => void;
  reset: () => void,
}

export interface ProductCardProps {
  className?: string,
  product: Product,
  children?: ReactElement | ReactElement[] | ((args: ProductCardHandlers) => JSX.Element),
  style?: React.CSSProperties,
  value?: number,
  onChange?: (args: ProductCardOnChangeArgs) => void
  initialValues?: InitialValues
}

export function ProductCard({ product, children, className, style, value, onChange, initialValues }: ProductCardProps) {

  const { cantidad, incrementBy, maxCount, reset, isMaxCountReached } = useProduct({ value, onChange, product, initialValues });

  return (
    <ProductContext.Provider value={{
      cantidad,
      incrementBy,
      product,
      maxCount,
      reset,
      isMaxCountReached
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {/* <ProductImage img={product.img}></ProductImage>
      <ProductTitle title={product.title}></ProductTitle>
      <ProductButtons changeQuantity={incrementBy} quantity={cantidad}></ProductButtons> */}
        {
          typeof children === "function" ?
            children({
              count: cantidad,
              increaseBy: incrementBy,
              isMaxCountReached,
              reset,
              maxCount,
              product,
            })
            :
            children
        }
      </div>
    </ProductContext.Provider>
  );
}



ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

