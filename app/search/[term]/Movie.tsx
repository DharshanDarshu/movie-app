import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  posterPath: string;
  releaseDate: string;
  id: number;
};

function Movie({
  title,
  posterPath,
  releaseDate,
  id,
}: Props) {
  return (
    <>
      {posterPath && (
        <div className='relative'>
          <Link
            href={`/${id}`}
            className='hover:scale-[1.02] transition-all duration-300 ease-out'>
            <Image
              src={`https://image.tmdb.org/t/p/original${posterPath}`}
              width={800}
              height={800}
              alt={title}
              className='bg-black/10'
            />
          </Link>
          <h1 className='absolute top-1/2 left-1/2 hidden hover:inline-block'>
            {title}
          </h1>
          <h2>{releaseDate}</h2>
        </div>
      )}
    </>
  );
}

export default Movie;
