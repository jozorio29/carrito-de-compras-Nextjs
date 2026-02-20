import { useCartStore } from "@/store/useCartStore";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity as number),
    0
  );

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Shopping Cart</h3>
      <ul>
        {cart?.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
    </section>
  );
}
