export const dynamic = 'force-dynamic';
import MovieResult from '@/components/MovieResult';

const API_KEY = process.env.API_KEY;

type Props = { searchParams: any };

interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: number[];
}

export default async function Home({ searchParams }: Props) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch movie data');
  }

  const data: any = await res.json();
  const results: MovieInfo = data.results;

  return (
    <div>
      <MovieResult results={results} />
    </div>
  );
}
