import SideNav from '../components/SideNav';
import '../styles/movie-details.scss';
import playIcon from '../assets/icons/play-white.svg';
import starIcon from '../assets/icons/star.svg';
import ticketsIcon from '../assets/icons/two-tickets.svg';
import listIcon from '../assets/icons/list.svg';
import listWhiteIcon from '../assets/icons/list-white.svg';
import bestShows from '../assets/icons/best-shows.svg';
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../redux/featureApi/movieApiSlice';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';
import { convertToUTCDate } from '../utils/utils';
import TopNav from '../components/TopNav';

const MovieDetails = () => {
  
  const { movieId } = useParams();
  const { isFetching, isSuccess, data } = useGetMovieByIdQuery({ id: movieId });
  const [backdropPath, setBackdropPath] = useState('');
  const movieBackgroundProps = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original/${backdropPath}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    borderRadius: '20px',
  };

  useEffect(() => {
    isSuccess && console.log(data);
    isSuccess && setBackdropPath(data?.backdrop_path);
    // eslint-disable-next-line
  }, [isSuccess]);

  return (
    <>
      <div className='movie-details'>
        <TopNav />
        <SideNav />
        {isFetching && (
          <Spinner message={'Fetcing movie details. Please wait'} />
        )}
        {isSuccess && (
          <div className='movie-details-content'>
            <div className='movie-poster'>
              <div style={movieBackgroundProps}>
                <div className='play-movie'>
                  <div className='play-circle'>
                    <img src={playIcon} alt='play' />
                  </div>
                </div>
              </div>
            </div>

            <div className='details-others'>
              <div className='details'>
                <div className='header'>
                  <h3 className='title'>
                    <span data-testid='movie-title'>{data?.title}</span>
                    <span className='bullet-dot'>&#x2022;</span>
                    <span data-testid='movie-release-date'>{`${convertToUTCDate(data?.release_date)}`}</span>
                    <span className='bullet-dot'>&#x2022;</span>
                    <span>PG-13</span>
                    <span className='bullet-dot'>&#x2022;</span>
                    <span data-testid='movie-runtime'>{data?.runtime} minutes</span>
                  </h3>

                  <div className='genre'>
                    <p className='genre'>Action</p>
                    <p className='genre'>Drama</p>
                  </div>
                </div>

                <div className='description'>
                  <p data-testid='movie-overview'>
                    {data?.overview}
                  </p>
                </div>

                <div className='cast'>
                  <p className='director'>
                    Director: <span>Joseph Kosinski</span>
                  </p>

                  <p className='writers'>
                    Writers: <span>Jim Cash, Jack Epps Jr, Peter Crag</span>
                  </p>

                  <p className='stars'>
                    Stars:{' '}
                    <span>Tom Cruise, Jennifer Connelly,Miles Teller</span>
                  </p>
                </div>

                <div className='awards'>
                  Top rated movie #{Math.round(Math.random() * 100) + 1}
                </div>
              </div>

              <div className='others'>
                <div className='stars'>
                  <div>
                    <img src={starIcon} alt='star' />
                    <div>
                      <p>
                        8.5 <span>| 350k</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='options'>
                  <button className='showtimes'>
                    <img src={ticketsIcon} alt='tickets' /> See Showtimes
                  </button>
                  <button className='more-options'>
                    <img src={listIcon} alt='more-watch' />
                    More watch options
                  </button>
                </div>

                <div className='best-shows'>
                  <img src={bestShows} alt='best-shows' />
                  <div className='view-playlist'>
                    <img src={listWhiteIcon} alt='white-list' />
                    <p>The Best Movies and Shows in September</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
