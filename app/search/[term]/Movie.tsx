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
        <div>
          <Link href={`/${id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original${posterPath}`}
              width={800}
              height={800}
              alt={title}
            />
          </Link>
          <h1>{title}</h1>
          <h2>{releaseDate}</h2>
        </div>
      )}
    </>
  );
}

export default Movie;
