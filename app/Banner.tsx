import Image from "next/image";
import React from "react";

async function Banner() {
  // https://api.themoviedb.org/3/movie/upcoming?api_key=0626e14ba8271472944432665972b0be&language=ta&page=1
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=ta&page=1`,
  );

  const movieData = await tmdbResponse.json();
  const random = Math.floor(
    Math.random() * movieData.results.length,
  );
  console.log(movieData.results[0]);
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original${movieData.results[random].poster_path}`}
        className='w-full h-[80vh]'
        width={600}
        height={600}
        priority
        alt={movieData.results[random].title}
      />
    </div>
  );
}

export default Banner;
