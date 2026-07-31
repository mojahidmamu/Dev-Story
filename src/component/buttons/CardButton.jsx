"use client";

import { useCart } from "@/context/CartContext";

const CardButton = ({ food }) => {
  const { cart, addToCart } = useCart();

  const added = cart.some((item) => item.id === food.id);

  return (
    <button
      onClick={() => addToCart(food)}
      disabled={added}
      className={`rounded-lg px-4 py-2 text-white ${
        added
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-500 hover:bg-green-600"
      }`}
    >
      {added ? "Added ✓" : "Add to Cart 🛒"}
    </button>
  );
};

export default CardButton;
