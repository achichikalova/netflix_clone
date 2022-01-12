import React, { useEffect } from 'react';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // Logged out
        dispatch(logout);
      }
    })

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Nav user={user} />
      {!user ? (
        <LoginScreen />
      ) : 
      <Routes>
        <Route exact path="/" element={<HomeScreen/>}/>
      </Routes>
      }
    </Router>
  );
}

export default App;
