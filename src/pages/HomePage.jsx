import '../styles/homePage.scss';
import TopNav from '../components/TopNav';
import imdbIcon from '../assets/icons/imdb.svg';
import rottenTomatoesIcon from '../assets/icons/tomato.svg';
import playIcon from '../assets/icons/play.svg';
import chevronRightIcon from '../assets/icons/chevron-right.svg';
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import { useGetTopMoviesQuery } from '../redux/featureApi/movieApiSlice';
import { useEffect, useState } from 'react';

const HomePage = () => {
  
  const { data, isFetching, isSuccess } = useGetTopMoviesQuery();
  const [randomMovie, setRandomMovie] = useState({});
  useEffect(() => {
    if (isSuccess)  {
      console.log(data)
      setRandomMovie(data.results[Math.floor(Math.random() * data.results.length)])
    }
    // eslint-disable-next-line
  }, [isSuccess]);
  
  const heroBackgroundProps = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      {isFetching && (
        <div
          style={{
            width: '100%',
            height: '100vh',
          }}
        >
          <Spinner message={'Initializing Application. Please wait'} />
        </div>
      )}
      {isSuccess && (
        <>
          <div className='home-hero' style={heroBackgroundProps}>
            <TopNav />

            <div className='hero-content-container'>
              <div className='hero-content'>
                <div>
                  <h1 className='hero-header'>{randomMovie?.title}</h1>
                  <div className='hero-ratings'>
                    <div className='imbd'>
                      <img src={imdbIcon} alt='imdb' />
                      <p>{(Math.random()*100).toFixed(1)} / 100</p>
                    </div>
                    <div className='rotten-tomatoes'>
                      <img src={rottenTomatoesIcon} alt='rotten-tomatoes' />
                      <p>{Math.round(Math.random()*100)}%</p>
                    </div>
                  </div>
                  <p className='hero-description'>
                    {randomMovie?.overview}
                  </p>
                  <button className='watch-trailer'>
                    <img src={playIcon} alt='play' />
                    <p>WATCH TRAILER</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='featured-movies'>
            <div className='featured-movies-header'>
              <h2>Featured Movies</h2>
              <p className='see-more'>
                See more <img src={chevronRightIcon} alt='see-more' />
              </p>
            </div>

            <div className='featured-movies-list'>
              {/* map first 10 */}
              {data?.results?.slice(0, 10).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
