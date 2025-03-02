"use client";

import { useParams } from "next/navigation";

const ProductDetail = () => {
  const params = useParams();

  return <div>Product Detail del sku {params.sku}</div>;
};

export default ProductDetail;
