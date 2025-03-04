import { IProduct } from '@/lib/types';
import { getProductBySku } from '@/api/products';
import { useEffect, useState } from 'react';

export const useProductDetail = (sku: string) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const fetchProduct = async () => {
    try {
      const response = await getProductBySku(sku);
      setProduct(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [sku]);

  return { product, loading, error };
};
