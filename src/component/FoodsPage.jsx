import React from "react";

const FoodsPage = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();

  return (
    <div>
      <h1>Total Food: {data.foods.length} </h1>
    </div>
  );
};

export default FoodsPage;
