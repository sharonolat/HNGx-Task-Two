import '../styles/topNav.scss';
import { Link } from 'react-router-dom';
import LogoIcon from '../assets/icons/tv.svg';
import SearchIcon from '../assets/icons/search.svg';
import MenuIcon from '../assets/icons/menu.svg';
import { useNavigate } from 'react-router-dom';

const TopNav = ({setSearch}) => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setSearch(e.target.value);
      if (!window.location.pathname.includes('/search')) {
        console.log('navigate to search');
        navigate(`/search`);
      }
    }
  };

  return (
    <div className='navbar'>
      <Link to='/' className='logo'>
        <img src={LogoIcon} alt='logo' />
        <h1>MovieBox</h1>
      </Link>

      <div className='search-bar'>
        <input
          type='text'
          placeholder='What do you want to watch?'
          onKeyDown={handleKeyDown}
        />
        <img src={SearchIcon} alt='search' />
      </div>

      <div className='menu-container'>
        <p>Sign in</p>
        <img src={MenuIcon} alt='menu' />
      </div>
    </div>
  );
};

export default TopNav;
