import Image from "next/image";
import React from "react";

type Props = {
  movies: any;
};

function Banner({ movies }: Props) {
  // https://api.themoviedb.org/3/movie/upcoming?api_key=0626e14ba8271472944432665972b0be&language=ta&page=1

  const random = Math.floor(Math.random() * movies.length);
  console.log(movies[random]);
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original${movies[random].backdrop_path}`}
        className='w-full h-[80vh] object-cover'
        width={600}
        height={600}
        priority
        alt={movies[random].title}
      />
    </div>
  );
}

export default Banner;
