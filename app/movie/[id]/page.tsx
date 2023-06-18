import Image from 'next/image';
import React from 'react';

type Props = { params: any };

async function getMovie(params: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params}?api_key=${process.env.API_KEY}`
  );

  return await res.json();
}

export default async function MoviePage({ params }: Props) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="Image not available"
          width={500}
          height={300}
          className="rounded-lg max-w-full max-h-full"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <div className="flex items-center">
            <p className="mb-3">
              <span className="font-semibold mr-1">Ratings:</span>
              {movie.vote_count}
            </p>
            <p className="mb-3 ml-5">
              <span className="font-semibold mr-1">Rating Average:</span>
              {movie.vote_average.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
