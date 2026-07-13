"use client";
import { useRouter } from "next/navigation";


const Banner = () => {
    const router = useRouter();
    const handleShareStory = () => {
        const password = prompt("Please enter the password to share your story:");

        if(password === "1234") {
            router.push("/dashboard");
        }else {
            alert("❌ Incorrect password. Access denied.");
        }
    };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br rounded-2xl from-indigo-600 via-violet-600 to-pink-500 py-16">
      {/* Blur Background */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 text-center ">
        <h1 className="text-4xl font-extrabold text-white md:text-6xl">
          Welcome to
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Dev Story
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-100">
          Share your programming journey, inspire others, and build a collection
          of developer experiences.
        </p>

        <button
          onClick={handleShareStory}
          className="mt-10 rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-yellow-300 hover:text-black"
        >
          🚀 Share Story
        </button>
      </div>
    </section>
  );
};

export default Banner;
