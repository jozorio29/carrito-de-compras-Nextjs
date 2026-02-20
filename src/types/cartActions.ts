import { Product } from "./product";

export interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
}
