import { useNavigate } from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar';

const Nav = ({ user, searchTerm, setSearchTerm, signUp, setSignUp }) => {

  const navigate = useNavigate();
  
  return (
    <div className='nav'>
      <div className="nav-content">
        <img onClick={() => {navigate('/')}} className='nav-logo' src="./images/logo.png" alt="" />
        {!user ? (
          <div className="nav-btn">
            <button className='btn'>English</button>
            <button className='btn btn--red' onClick={() => setSignUp(true)}>Sign In</button>
          </div>
        ) :
          <div className='nav-content-data'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <img onClick={() => navigate('/profile')} className='user-avatar' src="./images/user.png" alt="" />
          </div>
        }
      </div>
    </div>
  )
}

export default Nav;