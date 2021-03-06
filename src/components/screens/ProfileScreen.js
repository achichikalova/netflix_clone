import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import PlanList from './PlanList';
import './ProfileScreen.css';

const ProfileScreen = () => {

  const user = useSelector(selectUser);
  const navigate = useNavigate();

  async function handleLogout() {
    await auth.signOut();  
    navigate('/');
  }

  return (
    <div className='profileScreen'>
      <div className="profileScreen-content">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img src="./images/user.png" alt="user-avatar" />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans</h3>
              <PlanList />
              <button onClick={() => handleLogout()} className='profileScreen-signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;