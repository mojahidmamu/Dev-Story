import Link from "next/link";
import FoodHeader from "./buttons/FoodHeader";
import InputSearch from "./InputSearch";
import CardButton from "./buttons/CardButton";

const FoodsPage = async ({ searchParams }) => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
    {
      cache: "no-store",
    },
  );

  const data = await res.json();

  // Get search text from URL
  const search = searchParams?.search?.toLowerCase() || "";

  // Filter foods
  const filteredFoods = data.foods.filter((food) =>
    food.title.toLowerCase().includes(search),
  );

  return (
    <div className="max-w-7xl mx-auto p-8">
      <FoodHeader totalFoods={filteredFoods.length} />

      <div className="mt-2 mb-8">
        <InputSearch />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="overflow-hidden rounded-xl border shadow-md"
          >
            <img
              src={food.foodImg}
              alt={food.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{food.title}</h2>

              <p className="mt-2 text-gray-500">{food.category}</p>

              <div className="mt-3 flex justify-between">
                <p>Available: {food.catId}</p>

                <p className="font-semibold text-orange-500">${food.price}</p>
              </div>

              <div className="mt-5 flex justify-around">
                <Link
                  href={`/foods/${food.id}`}
                  className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
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
