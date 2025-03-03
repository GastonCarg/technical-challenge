"use client";

import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { sku } = useParams();

  return <div>Product Detail del sku {sku}</div>;
};

export default ProductDetail;
