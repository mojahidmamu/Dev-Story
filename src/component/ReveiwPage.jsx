"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
const currentUser = "current-user@mail.com";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
      });
  }, []);

  const handleLike = (id) => {
    setReviews((prev) =>
      prev.map((review) => {
        if (review.id !== id) return review;

        const liked = review.likes.includes(currentUser);

        return {
          ...review,
          likes: liked
            ? review.likes.filter((email) => email !== currentUser)
            : [...review.likes, currentUser],
        };
      }),
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-10 text-center text-4xl font-bold">
          Customer Reviews ({reviews.length})
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* User */}
              <div className="flex items-center gap-4">
                {/* <img
                  src={review.photo}
                  alt={review.user}
                  className="h-16 w-16 rounded-full border-2 border-orange-400 object-cover"
                /> */}

                <Image
                  src={review.photo}
                  alt={review.user}
                  className="h-16 w-16 rounded-full border-2 border-orange-400 object-cover"
                  width={64}
                  height={64}
                />

                <div>
                  <h2 className="text-lg font-bold">{review.user}</h2>

                  <p className="text-sm text-gray-500">{review.email}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl ${
                      star <= review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="mt-4   leading-7 text-gray-600">{review.review}</p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <button
                  onClick={() => handleLike(review.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 transition ${
                    review.likes.includes(currentUser)
                      ? "bg-pink-600 text-white"
                      : "bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white"
                  }`}
                >
                  {review.likes.includes(currentUser) ? "❤️ Liked" : "🤍 Like"}
                </button>

                <div>
                  <p className="text-sm text-gray-500">
                    ❤️ {review.likes.length} Likes
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
