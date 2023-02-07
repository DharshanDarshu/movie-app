"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Search() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearchSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    // const searchResponse = await fetch(
    //   `https://api.themoviedb.org/3/search/movie?api_key=0626e14ba8271472944432665972b0be&query=${input}`,
    // );

    // const data = await searchResponse.json();

    // console.log(data);

    if (!input) return;

    router.push(`/search/${input}`);
  };
  return (
    <form
      className='flex-1 flex items-center bg-white py-1 rounded-sm text-black'
      onSubmit={handleSearchSubmit}>
      <input
        type='text'
        value={input}
        placeholder='Search Movies'
        onChange={(e) => setInput(e.target.value)}
        className='w-full bg-transparent outline-none mx-2 placeholder:text-sm'
      />
      <MagnifyingGlassIcon className='h-6 mr-2' />
    </form>
  );
}

export default Search;
