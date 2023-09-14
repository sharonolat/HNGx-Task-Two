import { Link } from 'react-router-dom';
import '../styles/page-not-found.scss';

const PageNotFound = () => {
  return (
    <>
      <div className='page-not-found'>
        <div>
          <h1>404</h1>
          <p>Didn&apos;t find anything here!</p>

          <Link to={'/'}>Back Home</Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
