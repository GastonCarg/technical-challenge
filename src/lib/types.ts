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

