import Link from "next/link";
import React from "react";

const FoodsPage = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        Total Foods: {data.foods.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.foods.map((food) => (
          <div
            key={food.id}
            className="border rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={food.foodImg}
              alt={food.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{food.title}</h2>

              <p className="text-gray-500 mt-2 line-clamp-2">{food.category}</p>

              <div className="flex justify-between item-center">
                <p className="text-gray-500 mt-2 line-clamp-2">
                  Available: {food.catId}
                </p>

                <p className="mt-3 font-semibold text-orange-500">
                  ${food.price}
                </p>
              </div>

              <Link
                href={`/foods/${food.id}`}
                className="inline-block mt-5 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
