import '../styles/topNav.scss';
import { Link } from 'react-router-dom';
import LogoIcon from '../assets/icons/tv.svg';
import SearchIcon from '../assets/icons/search.svg';
import MenuIcon from '../assets/icons/menu.svg';

const TopNav = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='logo'>
        <img src={LogoIcon} alt='logo' />
        <h1>MovieBox</h1>
      </Link>

      <div className='search-bar'>
        <input type='text' placeholder='What do you want to watch?' />
        <img src={SearchIcon} alt='search' />
      </div>

      <div className='menu-container'>
        <p>Sign in</p>
        <img src={MenuIcon} alt="menu"/>
      </div>
    </div>
  );
};

export default TopNav;
