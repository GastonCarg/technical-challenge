import Link from "next/link";
import type { IProduct } from "@/lib/types";

const Product = ({ product }: { product: IProduct }) => {
  const { name, category, brand, price, sku, image } = product;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative p-4">
        <div className="aspect-square rounded-lg mb-4 max-h-100 justify-center items-center flex overflow-hidden">
          <img src={image} alt={name} className="rounded-lg max-h-[-webkit-fill-available]"/>
        </div>

        <div className="absolute top-4 left-4 ">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {category.name}
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-2">
            {name}
          </h2>
          <p className="text-sm text-gray-600 flex items-center">{brand}</p>

          <div className="flex justify-between items-center mt-4">
            <h4 className="text-2xl font-bold text-blue-600">
              ${Number(price).toFixed(2)}
            </h4>
            <Link
              href={`/products/${sku}`}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300"
            >
              Ver detalle →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
