"use client";

import { useParams } from "next/navigation";
import { useProductDetail } from "@/hooks/useProductDetail";

const ProductDetail = () => {
  const params = useParams();

  const sku = Array.isArray(params.sku) ? params.sku[0] : params.sku;
  const { product, loading, error } = useProductDetail(sku || "");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="bg-white p-4">
      <h1>{product?.name}</h1>
      <p>{product?.sku}</p>
      <p>{product?.brand}</p>
      <img src={product?.image} alt={product?.name} />
      <p>{product?.description}</p>
      <p>{product?.price}</p>
      <p>{product?.category.name}</p>
      <ul>
        {product?.specifications.map((spec, index: number) => (
          <li key={index}>
            {spec.name}: {spec.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
