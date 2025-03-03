import { IProduct, ProductsResponse } from "@/lib/types";

export const getProducts = async ({ page }: { page?: number | undefined; }): Promise<ProductsResponse> => {
  try {
    await delay();

    const queryParams = new URLSearchParams();
    if (page) queryParams.append("_page", page.toString());
    const response = await fetch(`http://localhost:3001/products?${queryParams.toString()}`);

    if (!response.ok) {
      throw new Error('No se pudo obtener los productos');
    }

    const productsData = await response.json();
    return productsData;
  } catch (error) {
    throw error;
  }
};

export const getProductBySku = async (sku: string): Promise<IProduct> => {
  try {
    await delay();
    const response = await fetch(`http://localhost:3001/products/${sku}`);

    switch (response.status) {
      case 404:
        throw new Error('Producto no encontrado');
      case 500:
        throw new Error('Error en el servidor');
    }

    if (!response.ok) {
      throw new Error('No se pudo obtener el producto');
    }

    const productsData = await response.json();
    return productsData;
  } catch (error) {
    throw error;
  }
};

const delay = (ms = 3000) => new Promise(res => setTimeout(res, ms));
