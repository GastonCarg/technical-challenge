"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import { IProduct, ProductsResponse } from "@/lib/types";
import { getProducts } from "@/api/products";

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

const Home = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { data, error, fetchNextPage, status, hasNextPage } =
    useInfiniteQuery<ProductsResponse>({
      queryKey: ["products", "infinite"],
      queryFn: ({ pageParam = 1 }) =>
        getProducts({
          page: Number(pageParam)
        }),
      initialPageParam: 1,
      getNextPageParam: (nextPage) => nextPage.next ?? undefined,
    });

  const products = data?.pages.flatMap((page) => page.data) || [];
  useEffect(() => {
    setIsSearching(true);
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setIsSearching(false);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const filteredProducts = debouncedSearch
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          product.sku.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    : products;

  if (status === "pending") return <div>Loading...</div>;
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
        <InfiniteScroll
          dataLength={filteredProducts.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage && !debouncedSearch}
          loader={<h4>Loading...</h4>}
        >
          <section className="grid grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <Product key={product.sku} product={product} />
            ))}
          </section>
        </InfiniteScroll>
      )}
      {!isSearching && !filteredProducts.length && <div>No hay resultados</div>}
    </>
  );
};

export default Home;
