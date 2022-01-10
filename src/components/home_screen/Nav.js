import './Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <div className="nav-content">
        <img className='nav-logo' src="./images/logo.png" alt="" />
        <div className="nav-btn">
          <button className='btn'>English</button>
          <button className='btn btn--red'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Nav;