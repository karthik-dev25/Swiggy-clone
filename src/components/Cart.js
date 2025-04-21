import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearItem = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto">
      <h3 className="text-center font-bold m-2 p-2">Cart (Total {cartItems.length} Items)</h3>
      <div className="w-full">
        <button
          onClick={handleClearItem}
          className="flex justify-center rounded-lg cursor-pointer text-white font-bold bg-black m-auto p-2"
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h1 className="text-center p-4 m-4 font-bold">
          Cart is Empty, Please add the items to the cart
        </h1>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <ItemsList data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
