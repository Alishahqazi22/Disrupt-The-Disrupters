import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addToCart, clearCart, removeFromCart } from "../store/cartSlice";
import { IoIosArrowBack } from "react-icons/io";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(clearCart());
    navigate(-1);
  };


  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleNavigate = ()=>{
    navigate(-1);
  }

  if (cartItems.length === 0) {
    return (
      <div>
        <span
          onClick={handleNavigate}
          className="text-primary flex items-center p-6 gap-1 hover:underline"
        >
          <IoIosArrowBack />
          <p>Back</p>
        </span>
        <h2 className="text-center mt-10 text-xl">Your Cart is Empty </h2>
      </div>
    );
  };
  return (
    <div className="z-10 px-4 sm:px-10 md:px-20 lg:px-40 py-10">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <img
              src={item.image[0]}
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1 px-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                disabled={item.quantity <= 1}
                onClick={() => dispatch(addToCart({ ...item, quantity: -1 }))}
                className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
              >
                -
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-4 text-red-500"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
        <button
          onClick={handleCheckout}
          className="px-6 py-2 bg-primary text-white rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
