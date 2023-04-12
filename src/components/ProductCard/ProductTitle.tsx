import { useContext } from "react";

import styles from "../../styles/styles.module.css";
import React from "react";
import { ProductContext } from "./ProductContext";

export function ProductTitle(props: { title?: string, className?: string }) {
  const { product } = useContext(ProductContext);
  const title = props.title ?? product.title;
  return (
    <span className={`${styles.productDescription} ${props.className}`}>{title}</span>
  );
}