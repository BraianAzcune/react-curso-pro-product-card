import { createContext } from "react";
import {ProductContextProps } from "./interfaces";
export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);