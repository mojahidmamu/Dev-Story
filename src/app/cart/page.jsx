"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="mx-auto max-w-7xl p-10">
      <h1 className="mb-8 text-4xl font-bold">🛒 My Cart ({cart.length})</h1>

      {cart.length === 0 ? (
        <h2 className="text-xl text-gray-500">No food added yet.</h2>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cart.map((food) => (
            <div key={food.id} className="rounded-xl bg-white p-5 shadow">
              <img
                src={food.image}
                alt={food.name}
                className="h-48 w-full rounded-lg object-cover"
              />

              <h2 className="mt-4 text-2xl font-bold">{food.name}</h2>

              <p className="mt-2 text-gray-600">{food.description}</p>

              <p className="mt-4 font-bold text-orange-500">${food.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
