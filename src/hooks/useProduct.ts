import { useEffect, useRef, useState } from "react";
import { Product, ProductCardOnChangeArgs } from "../components/ProductCard/interfaces";

export interface InitialValues{
  count?: number,
  maxCount?: number,
}

export interface useProductArgs {
  value?: number,
  product: Product,
  onChange?: (args: ProductCardOnChangeArgs) => void,
  initialValues?: InitialValues,
}


export function useProduct(args?:useProductArgs) {
  const valorInicial = args && (args.initialValues && args.initialValues.count !== undefined ? args.initialValues.count : args.value) || 0;
  const [cantidad, setcantidad] = useState(valorInicial);
  const isControlled = useRef(args && !!args.onChange);
  
  useEffect(() => {
    if(args && args.value !== undefined){
      setcantidad(args.value);
    }
  }, [args && args.value]);
  
  function reset(){
    setcantidad(args && args.initialValues && args.initialValues.count !== undefined ? args.initialValues.count : 0);
  }
  
  function incrementBy(cant:number){
    const newvalue = Math.max(0,cantidad+cant);

    if(args && args.initialValues && args.initialValues.maxCount !== undefined && newvalue > args.initialValues.maxCount) return;
      
    if(isControlled.current){
      return args && args.onChange && args.onChange({count:cant, product: args.product});
    }
    
    setcantidad(newvalue);
  }

  return {
    cantidad,
    reset,
    incrementBy,
    maxCount: args && args.initialValues && args.initialValues.maxCount,
    isMaxCountReached: !!(args && args.initialValues && args.initialValues.count) && args.initialValues.maxCount === cantidad,
  };
}
