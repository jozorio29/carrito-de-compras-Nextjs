import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCart({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col justify-between p-4">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={200}
        height={200}
        className="object-contain w-full h-40"
      />
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600 flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-800 font-semibold">
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="ml-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
