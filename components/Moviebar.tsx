import React from 'react';
import MoviebarItem from './MoviebarItem';

type Props = {};

export default function Moviebar({}: Props) {
  return (
    <div className="list-none flex justify-center p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg">
      <li>
        <MoviebarItem title="Trending" param="fetchTrending" />
      </li>
      <li>
        <MoviebarItem title="Top Rated" param="fetchTopRated" />
      </li>
    </div>
  );
}
