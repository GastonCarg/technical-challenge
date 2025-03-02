export const getProducts = async (page?: string) => {
  await delay();
  const response = await fetch(`http://localhost:3001/products?_page=${page ? page : "1"}`);

  if (!response.ok) {
    throw new Error('No se pudo obtener los productos');
  }

  const productsData = await response.json();
  return productsData;
};

const delay = (ms = 3000) => new Promise(res => setTimeout(res, ms));
