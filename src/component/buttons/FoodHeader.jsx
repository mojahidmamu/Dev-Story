"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link"; 

const FoodHeader = ({ totalFoods }) => {
  const { cart } = useCart();

  return (
    <div className="mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Total Foods: {totalFoods}</h1>

      <Link href="/cart">
        <button className="rounded-lg bg-orange-500 px-5 py-3 text-white hover:bg-orange-600">
          🛒 Added Foods ({cart.length})
        </button>
      </Link>
    </div>
  );
};

export default FoodHeader;
