import { api } from "../api";

import { ProductDTO } from "@/DTOs/productDTO";

export const productService = {
  getAll: async () => {
    return await api.get<ProductDTO[]>('/products');
  },
} 
