import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-green-400 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="p-2 m-2 font-sans text-xl">
            Cart is empty , Add items to cart !!
          </h1>
        )}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
