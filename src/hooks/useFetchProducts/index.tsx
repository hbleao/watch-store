import { ProductDTO } from "@/DTOs/productDTO";
import { productService } from "@/services/productService";
import { useEffect, useState } from "react"

export const useFetchProducts  = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getProducts() {
    try {
      setIsProductLoading(true);
      const httpResponse = await productService.getAll();
      setProducts(httpResponse.data);
    } catch (error) {
      setError(true);
    } finally {
      setIsProductLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    isProductLoading,
    error
  }
}
