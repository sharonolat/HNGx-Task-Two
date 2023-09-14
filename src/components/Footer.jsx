import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='socials'>
          <img src={facebookIcon} alt='facebook' />
          <img src={twitterIcon} alt='twitter' />
          <img src={instagramIcon} alt='instagram' />
          <img src={youtubeIcon} alt='youtube' />
        </div>

        <div className='footer-links'>
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>

        <div className='copyright'>
          &copy; 20213 MovieBox by Sharon Olatunji
        </div>
      </div>
    </div>
  );
};

export default Footer;
