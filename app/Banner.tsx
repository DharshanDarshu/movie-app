"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  movies: any;
};

function Banner({ movies }: Props) {
  const [movie, setMovie] = useState({
    title: "",
    backdrop_path: "",
    poster_path: "",
  });
  useEffect(() => {
    const random = Math.floor(
      Math.random() * movies.length,
    );
    console.log(movies[random]);
    setMovie(movies[random]);
  }, []);

  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className='hidden md:inline-block w-full h-[80vh] object-cover'
        width={600}
        height={600}
        priority
        alt={movie.title}
      />
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        className='inline-block md:hidden w-full h-[80vh] object-cover'
        width={600}
        height={600}
        priority
        alt={movie.title}
      />
    </div>
  );
}

export default Banner;
