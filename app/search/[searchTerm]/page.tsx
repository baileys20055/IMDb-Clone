import MovieResult from '@/components/MovieResult';
import React from 'react';

type Props = { params: any };

export default async function SearchPage({ params }: Props) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Error fetching data during search');
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <MovieResult results={results} />}
    </div>
  );
}
