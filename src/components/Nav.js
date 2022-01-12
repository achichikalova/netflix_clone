import './Nav.css';

const Nav = ({user}) => {
  
  return (
    <div className='nav'>
      <div className="nav-content">
        <img className='nav-logo' src="./images/logo.png" alt="" />
        {!user ? (
        <div className="nav-btn">
          <button className='btn'>English</button>
          <button className='btn btn--red'>Sign In</button>
        </div>
        ) : 
          <img className='user-icon' src="./images/user.png" alt="" />
        }
      </div>
    </div>
  )
}

export default Nav;