export interface IProduct {
  name: string;
  category: ICategory;
  brand: string;
  price: number;
  sku: string;
  specifications: ISpecification[];
  image: string;
  id: string;
  description: string;
  stock: number;
}

export interface ICategory {
  name: string;
  id: string;
}

export interface ISpecification {
  name: string;
  value: string;
}

export interface ProductsResponse {
  data: IProduct[];
  page: number;
  totalPages: number;
  first: number;
  prev: number | null;
  next: number;
  last: number;
  pages: number;
  items: number;
}
