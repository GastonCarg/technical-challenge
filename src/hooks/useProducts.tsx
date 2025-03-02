import { useState, useEffect } from "react";
import { getProducts } from "@/api/products";
import { IProduct } from "@/lib/types";

const useProducts = ({ page }: { page?: string }) => {
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const products = await getProducts(page);
      setProducts(products.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return { products, isLoading, error };
};

export default useProducts;
