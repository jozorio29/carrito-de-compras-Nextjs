import { Product } from "./product";

export interface State {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}
