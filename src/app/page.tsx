"use client";

import { useEffect, useState } from "react";
import useProducts from "@/hooks/useProducts";
import { IProduct } from "@/lib/types";
import Link from "next/link";

const Product = ({ product }: { product: IProduct }) => {
  const { name, category, brand, price, sku } = product;

  return (
    <span className="bg-red-500 p-4 rounded-lg">
      <h3>{sku}</h3>
      <h2>{name}</h2>
      <h5>{brand}</h5>
      <h6>{category.name}</h6>
      <h4>$ {price}</h4>
      <Link href={`/products/${sku}`}>Ver detalle</Link>
    </span>
  );
};

const Home = () => {
  const [page, setPage] = useState("1");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { products, isLoading, error } = useProducts({ page });

  useEffect(() => {
    setIsSearching(true);
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setIsSearching(false);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          product.sku.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [debouncedSearch, products]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <header className="flex justify-center items-center w-full">
        <input
          type="search"
          placeholder="Buscar producto"
          className="my-4 py-2 px-2 bg-white text-black rounded-lg w-100"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      {isSearching && <div className="text-center my-4">Buscando...</div>}

      {!isSearching && (
        <section className="grid grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <Product key={product.sku} product={product} />
          ))}
        </section>
      )}
      {!isSearching && !filteredProducts.length && <div>No hay resultados</div>}
    </>
  );
};

export default Home;
