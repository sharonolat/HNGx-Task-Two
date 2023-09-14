import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import PageNotFound from './pages/PageNotFound';
import SearchResult from './pages/SeachResult';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage setSearch={setSearch} />} />
          <Route path='/movie/:movieId' element={<MovieDetails setSearch={setSearch}/>} />
          <Route path='/search' element={<SearchResult search={search} setSearch={setSearch}/>} />
          <Route path='/*' element={<PageNotFound />  } />
        </Routes>
      </Router>
    </>
  )
}

export default App
