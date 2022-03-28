import React, { useEffect, useState } from 'react';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ErrorScreen from './components/screens/ErrorScreen';

function App() {

  const [signUp, setSignUp] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Search Bar Term
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // Logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <Nav user={user} searchTerm={searchTerm} setSearchTerm={setSearchTerm} signUp={signUp} setSignUp={setSignUp} />
      {!user ? (        
        <Routes>
          <Route exact path="/" element={<LoginScreen signUp={signUp} setSignUp={setSignUp} />}/>
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      ) : 
      <Routes>
        <Route exact path="/profile" element={<ProfileScreen />} />
        <Route exact path="/" element={<HomeScreen searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      }
    </Router>
  );
}

export default App;
