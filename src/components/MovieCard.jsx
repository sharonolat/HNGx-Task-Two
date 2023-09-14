import '../styles/movie-card.scss';
import imdbIcon from '../assets/icons/imdb.svg';
import rottenTomatoesIcon from '../assets/icons/tomato.svg';
import favoriteDefaultIcon from '../assets/icons/favorite.svg';
import favoriteActiveIcon from '../assets/icons/favorite-active.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link
      className='movie-card'
      data-testid='movie-card'
      to={`/movie/${movie?.id}`}
    >
      <div className='poster-image'>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='movie poster' data-testid='movie-poster' />
      </div>
      <div className='release-date' data-testid='movie-release-date'>
        {movie?.release_date}
      </div>
      <div className='title' data-testid='movie-title'>
        {movie?.title}
      </div>
      <div className='ratings'>
        <div className='imdb'>
          <img src={imdbIcon} alt='imdb' />
          <p>{(Math.random()*100).toFixed(1)} / 100</p>
        </div>
        <div className='rotten-tomatoes'>
          <img src={rottenTomatoesIcon} alt='rotten-tomatoes' />
          <p>{Math.round(Math.random()*100)}%</p>
        </div>
      </div>
      <div className='genre'>Action, Adventure, Horror</div>

      <div
        className='favorite favorite-active'
        onClick={(e) => {
          e.preventDefault();
          setIsFavorite(!isFavorite);
        }}
      >
        <img
          src={isFavorite ? favoriteActiveIcon : favoriteDefaultIcon}
          alt='favorite'
        />
      </div>
    </Link>
  );
}

export default MovieCard;
