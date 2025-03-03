"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useProductDetail } from "@/hooks/useProductDetail";
import { Loading, Error } from "@/app/components";

const ProductDetail = () => {
  const params = useParams();

  const sku = Array.isArray(params.sku) ? params.sku[0] : params.sku;
  const { product, loading, error } = useProductDetail(sku || "");

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      <header className="flex items-center w-full text-black my-6 text-blue-600 hover:underline">
        <Link href={"/"}>← Volver a productos</Link>
      </header>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <section className="flex justify-center items-center">
          <img src={product?.image} alt={product?.name} />
        </section>

        <section className="flex flex-col justify-start text-black space-y-4">
          <article className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
            <h4 className="text-xs">{product?.category.name}</h4>
            <h4 className="text-sm font-semibold">{product?.sku}</h4>
          </article>

          <h2 className="text-4xl font-bold">{product?.name}</h2>
          <p className="text-lg">{product?.brand}</p>
          <p className="text-5xl font-bold text-blue-600">${product?.price}</p>
          <p className="text-md">{product?.description}</p>

          <h3 className="font-bold text-lg">Especificaciones:</h3>
          <ul className="list-disc list-inside text-sm space-y-2 font-light">
            {product?.specifications.map((spec, index) => (
              <li key={index}>
                {spec.name}: {spec.value}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default ProductDetail;
