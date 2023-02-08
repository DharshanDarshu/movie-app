import Image from "next/image";
import React from "react";

type Props = {
  movies: any;
};

function Banner({ movies }: Props) {
  const random = Math.floor(Math.random() * movies.length);
  console.log(movies[random]);
  const movieRandom = movies[random];
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original${movieRandom.backdrop_path}`}
        className='hidden md:inline-block w-full h-[80vh] object-cover'
        width={600}
        height={600}
        priority
        alt={movieRandom.title}
      />
      <Image
        src={`https://image.tmdb.org/t/p/original${movieRandom.poster_path}`}
        className='inline-block md:hidden w-full h-[80vh] object-cover'
        width={600}
        height={600}
        priority
        alt={movieRandom.title}
      />
    </div>
  );
}

export default Banner;
