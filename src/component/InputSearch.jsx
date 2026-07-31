"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();

    const form = e.target;
    const search = form.search.value;

    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-3">
      <input
        type="text"
        name="search"
        defaultValue={searchParams.get("search") || ""}
        placeholder="Search Food..."
        className="border rounded-lg px-4 py-2 w-full"
      />

      <button
        type="submit"
        className="bg-orange-500 text-white px-5 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default InputSearch;
