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
    <div>
      <h1>{title}</h1>
      <h2>{releaseDate}</h2>
      <Link href={`/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
}

export default Movie;
