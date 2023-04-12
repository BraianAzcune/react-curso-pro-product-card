import React from "react";
import { useContext } from "react";
import noImage from "../../assets/no-image.webp";
import styles from "../../styles/styles.module.css";

import { ProductContext } from "./ProductContext";

export function ProductImage(props: { img?: string, className?: string }) {
  const { product } = useContext(ProductContext);
  const imagenSrc = props.img ?? product.img ?? noImage;
  return (
    <img className={`${styles.productImg} ${props.className}`} src={imagenSrc} alt="product" />
  );
}