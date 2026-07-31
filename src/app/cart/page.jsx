"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0,
  );

  return (
    <section className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">🛒 My Cart</h1>
            <p className="mt-2 text-gray-500">
              {cart.length} item{cart.length !== 1 && "s"} added
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            🍔 Continue Shopping
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-white py-20 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-gray-700">
              Your Cart is Empty 🛒
            </h2>

            <p className="mt-3 text-gray-500">
              Add your favorite foods to get started.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Browse Foods
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-6 lg:col-span-2">
              {cart.map((food) => (
                <div
                  key={food.id}
                  className="rounded-2xl bg-white p-5 shadow-lg transition hover:shadow-xl"
                >
                  <div className="flex flex-col gap-6 md:flex-row">
                    <img
                      src={food.foodImg}
                      alt={food.name}
                      className="h-48 w-full rounded-xl object-cover md:w-60"
                    />

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-800">
                          {food.title}
                        </h2>

                        <div className="mt-5 flex flex-wrap gap-3">
                          {food.category && (
                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                              🍽️ {food.category}
                            </span>
                          )}

                           
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <p className="text-3xl font-bold text-orange-500">
                          ${food.price}
                        </p>

                        <button className="rounded-lg bg-red-500 px-5 py-2 text-white transition hover:bg-red-600">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-800">
                Order Summary
              </h2>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Total Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="flex justify-between text-lg">
                  <span>Delivery Fee</span>
                  <span>$5</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-orange-500">
                    ${(totalPrice + 5).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="mt-8 w-full rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
