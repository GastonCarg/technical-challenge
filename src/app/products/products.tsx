import Link from "next/link";

import { IProduct } from "@/lib/types";

const Product = ({ product }: { product: IProduct }) => {
  const { name, category, brand, price, sku } = product;

  return (
    <span className="bg-red-500 p-4 rounded-lg">
      <h2>{name}</h2>
      <h5>{brand}</h5>
      <h6>{category.name}</h6>
      <h4>$ {price}</h4>
      <Link href={`/products/${sku}`}>Ver detalle</Link>
    </span>
  );
};

export default Product;
