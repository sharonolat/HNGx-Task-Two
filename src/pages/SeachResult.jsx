import { useSearchMovieByTitleQuery } from '../redux/featureApi/movieApiSlice';
import { useEffect, useState } from 'react';
import TopNav from '../components/TopNav';
import Spinner from '../components/Spinner';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';
import '../styles/search-result.scss';

const SearchResult = ({ search, setSearch }) => {
  const [searchResults, setSearchResults] = useState([]);

  const { isFetching, isSuccess, data, refetch } = useSearchMovieByTitleQuery({
    title: search,
  });

  useEffect(() => {
    if (isSuccess) {
      setSearchResults(data.results);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (search !== '') {
      refetch();
    }
  }, [search, refetch]);

  return (
    <>
      <TopNav setSearch={setSearch} />
      <div className='search-result'>
        {isFetching && (
          <div style={{ height: 'calc(100vh - 80px)' }}>
            <Spinner message={'Preparing Search Results. Please wait'} />
          </div>
        )}
        {isSuccess && (
          <div className='search-results-content'>
            <div>
              <h2>Search Results for {search}</h2>
              <div className='search-results-movies'>
                {searchResults.length === 0 ? (
                  <p>No movies found</p>
                ) : (
                  searchResults.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default SearchResult;
