import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import PageNotFound from './pages/PageNotFound';

function App() {
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
