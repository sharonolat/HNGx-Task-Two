import Logo from '../assets/icons/tv.svg';
import logOutIcon from '../assets/icons/logout.svg';
import projectorIcon from '../assets/icons/movie-projector.svg';
import tvShowIcon from '../assets/icons/tv-show.svg';
import homeIcon from '../assets/icons/home.svg';
import calendarIcon from '../assets/icons/calendar.svg';
import '../styles/side-nav.scss';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const navItems = [
    {
      icon: homeIcon,
      name: 'Home',
      class: '',
      to: '/'
    },
    {
      icon: projectorIcon,
      name: 'Movies',
      class: 'active',
      to: '#'
    },
    {
      icon: tvShowIcon,
      name: 'TV Series',
      class: '',
      to: '#'
    },
    {
      icon: calendarIcon,
      name: 'Upcoming',
      class: '',
      to: '#'
    },
  ];

  return (
    <>
      <div className='side-nav-container'>
        <Link className='logo' to={'/'}>
          <img src={Logo} alt='logo' />
          <h1>MovieBox</h1>
        </Link>

        <div className='nav-list'>
          {navItems.map((item) => (
            <Link key={item.name} className={`nav-item ${item.class}`} to={item.to}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>

        <div className='movie-quizzes'>
          <div className='movie-quizzes-content'>
            <h3>Play movie quizes and earn free tickets</h3>
            <p>50k people are playing now</p>
            <button>Start Playing</button>
          </div>
        </div>

        <div className='logout-container'>
          <div className='logout'>
            <img src={logOutIcon} alt='logout' />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
