import { IProduct, ProductsResponse } from "@/lib/types";
import { PRODUCTS_URL } from "@/constants";

export const getProducts = async ({ page }: { page?: number | undefined; }): Promise<ProductsResponse> => {
  try {
    await delay();

    const queryParams = new URLSearchParams();
    if (page) queryParams.append("_page", page.toString());

    const url = `${PRODUCTS_URL}?${queryParams.toString()}`;
    const response = await fetch(url);

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
    const url = `${PRODUCTS_URL}/${sku}`;
    const response = await fetch(url);

    let error = "No se pudo obtener el producto";

    switch (response.status) {
      case 404:
        error = "Producto no encontrado";
      case 500:
        error = "Error en el servidor";
    }

    if (!response.ok) {
      throw new Error(error);
    }

    const productsData = await response.json();
    return productsData;
  } catch (error) {
    throw error;
  }
};

const delay = (ms = 3000) => new Promise(res => setTimeout(res, ms));
