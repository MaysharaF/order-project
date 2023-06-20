import { Product } from "./Product";

export interface Order {
  id: number;
  item_quantity: number;
  total: string;
  items: {
    id: number;
    order_id: number;
    quantity: number;
    product: Product
  }[]
}