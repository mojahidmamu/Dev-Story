import Link from "next/link";
import React from "react";
import CardButton from "./buttons/CardButton";
import FoodHeader from "./buttons/FoodHeader";
import InputSearch from "./InputSearch";

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
      {/* Title and added card */}
      <FoodHeader totalFoods={data.foods.length} />

      <div className="mt-2">
        <InputSearch></InputSearch>
      </div>

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

              <div className="mt-5 flex justify-around items-center">
                <Link
                  href={`/foods/${food.id}`}
                  className="rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
                >
                  View Details
                </Link>

                <CardButton food={food} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
