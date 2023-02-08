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
        <div className='relative group'>
          <div className='hover:scale-[1.02] transition-all duration-300 ease-out'>
            <Link href={`/${id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${posterPath}`}
                width={800}
                height={800}
                alt={title}
                className='hover:opacity-70'
              />
            </Link>
          </div>
          <h1 className='absolute top-1/2 left-1/2 hidden group-hover:inline-block z-50'>
            {title}
          </h1>
          <h2 className='absolute top-1/2 left-1/2 hidden group-hover:inline-block z-50'>
            {releaseDate}
          </h2>
        </div>
      )}
    </>
  );
}

export default Movie;
