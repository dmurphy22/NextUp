import { React } from 'react';
import '../styles/UserNavBar.css';
import logo from '../images/NextUpLogo.png';
import PropTypes from 'prop-types';
import partyAnimation from '../lotties/party.json'
import Lottie from 'lottie-react';

const UserNavBar = ({ userId }) => {


  return (
    <nav className='top-nav-bar'>
      <div className='nav-items'>
        <img src={logo} className='logo' alt='logo' />
        <h1>Welcome to {userId}&rsquo;s party!
        </h1>
      </div>
      <div className='user-animation'>
        <Lottie
          animationData={partyAnimation}
          style={{ width: '150px', height: '160px', marginLeft: '10px' }} // You forgot to mention the height
        />
      </div>
    </nav>
  );
};

UserNavBar.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserNavBar;