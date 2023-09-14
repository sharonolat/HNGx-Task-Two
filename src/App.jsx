import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { useGetTopMoviesQuery } from './redux/featureApi/movieApiSlice';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import PageNotFound from './pages/PageNotFound';

function App() {
  // const {data, isLoading, isFetching, isSuccess} = useGetTopMoviesQuery()

  // useEffect(()=>{
  //   isSuccess && console.log(data)
  // }, [isSuccess])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:movieId' element={<MovieDetails />} />
          <Route path='/*' element={<PageNotFound />  } />
        </Routes>
      </Router>
    </>
  )
}

export default App