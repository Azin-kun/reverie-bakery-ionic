// src/services/api.ts
import axios from "axios";

const BASE_URL = "http://localhost:5000/reverie";

export interface Product {
  product_id: number;
  name: string;
  image: string;
  rating: number;
  description: string;
  price: number;
  category_id: number;
}
export interface Category {
  category_id: number;
  category_name: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${BASE_URL}/products`);
  return response.data;
};
export const fetchCategory = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(`${BASE_URL}/category`);
  return response.data;
};
