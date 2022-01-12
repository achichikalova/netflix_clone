import React, { useEffect, useState } from 'react';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import { auth } from './firebase';

function App() {

  const [user, setUser] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        setUser(userAuth)
      } else {
        // Logged out
      }
    })

    return unsubscribe;
  }, []);

  return (
    <Router>
      <Nav />
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
