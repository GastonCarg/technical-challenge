"use client";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

import { ProductsResponse } from "@/lib/types";
import { getProducts } from "@/api/products";
import Product from "@/app/products/products";
import { Loading, Error } from "@/app/components";

const Home = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { data, error, fetchNextPage, status, hasNextPage } =
    useInfiniteQuery<ProductsResponse>({
      queryKey: ["products", "infinite"],
      queryFn: ({ pageParam = 1 }) =>
        getProducts({
          page: Number(pageParam),
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

  if (status === "pending") return <Loading />;
  if (error) return <Error error={error} />;

  console.log({ data, filteredProducts, products });

  return (
    <>
      <header className="py-4 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="search"
              placeholder="Buscar producto"
              className="w-full py-3 pl-12 pr-4 text-gray-700 bg-gray-100 rounded-full outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>
      {isSearching && <Loading />}

      {!isSearching && (
        <InfiniteScroll
          dataLength={filteredProducts.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage && !debouncedSearch}
          loader={<Loading className="items-start" />}
          className="max-w-6xl mx-auto pb-12"
        >
          <section className="grid grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <Product key={product.sku} product={product} />
            ))}
          </section>
        </InfiniteScroll>
      )}
      {!isSearching && !filteredProducts.length && (
        <div className="flex justify-center align-center">
          No hay resultados
        </div>
      )}
    </>
  );
};

export default Home;
