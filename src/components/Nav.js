import { useNavigate } from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar';

const Nav = ({ user }) => {

  const navigate = useNavigate();
  
  return (
    <div className='nav'>
      <div className="nav-content">
        <img onClick={() => {navigate('/')}} className='nav-logo' src="./images/logo.png" alt="" />
        {!user ? (
          <div className="nav-btn">
            <button className='btn'>English</button>
            <button className='btn btn--red'>Sign In</button>
          </div>
        ) :
          <div className='nav-content-data'>
            <SearchBar />
            <img onClick={() => {navigate('/profile')}} className='user-avatar' src="./images/user.png" alt="" />
          </div>
        }
      </div>
    </div>
  )
}

export default Nav;