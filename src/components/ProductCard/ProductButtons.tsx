import { useContext } from "react";

import styles from "../../styles/styles.module.css";
import React from "react";
import { ProductContext } from "./ProductContext";

export function ProductButtons(props: { className?: string }) {
  const { cantidad, incrementBy, maxCount } = useContext(ProductContext);

  const isMaxReached = maxCount != undefined && cantidad >= maxCount;

  return (
    <div className={`${styles.buttonsContainer} ${props.className}`}>
      <button onClick={() => incrementBy(-1)} className={styles.buttonMinus}>-</button>
      <div className={styles.countLabel}>{cantidad}</div>
      <button
        onClick={() => incrementBy(1)}
        className={`${styles.buttonAdd} ${isMaxReached ? styles.disabled : ""}`}
        disabled={isMaxReached}>+</button>
    </div>
  );
}