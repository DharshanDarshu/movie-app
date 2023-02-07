import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
  );

  const movieData = await tmdbResponse.json();
  return movieData.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

async function MovieId({ params }) {
  const { movie } = params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.TMDB_API_KEY}`,
    { next: { revalidate: 60 } },
  );

  const movieData = await response.json();

  const videoRes = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${process.env.TMDB_API_KEY}`,
    { next: { revalidate: 60 } },
  );

  const movieVideoData = await videoRes.json();

  return (
    <div className='m-4 md:mx-20 md:my-8'>
      <div>
        <h2 className='text-2xl'>{movieData.title}</h2>
        <h2 className='text-lg'>
          {movieData.release_date}
        </h2>
        <h2>Runtime: {movieData.runtime} minutes</h2>
        <h2 className='bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm'>
          {movieData.status}
        </h2>
        <Image
          src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
          className='my-12 w-full object-contain'
          width={600}
          height={600}
          priority
          alt={movieData.title}
        />
        {movieVideoData?.results && (
          <div className='w-[87vw] h-[60vh] my-4'>
            <iframe
              className='w-full h-full'
              src={`https://www.youtube.com/embed/${movieVideoData?.results[0]?.key}`}
              title='Why React.js is taking a new direction'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieId;
