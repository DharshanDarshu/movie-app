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
        <div className='relative group text-white cursor-pointer'>
          <div className='relative group-hover:scale-[1.02] transition-all duration-300 ease-out'>
            <Link href={`/${id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${posterPath}`}
                width={800}
                height={800}
                alt={title}
                className=''
              />
              <div className='absolute top-0 w-full h-full bg-transparent group-hover:bg-black/60'></div>
            </Link>
          </div>
          <div className='absolute top-[25%] mx-4 hidden group-hover:inline-block z-50'>
            <h1 className=''>{title}</h1>
            <h2 className=''>{releaseDate}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
