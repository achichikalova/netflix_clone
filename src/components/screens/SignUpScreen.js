import { useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './SignUpScreen.css';
import { auth } from '../../firebase';

const SignUpScreen = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      console.log(user)
    } catch (error) {
      alert(error.message)
    }
  }

  const login = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      console.log(user)
    } catch (error) {
      alert(error.message)
    }
  }

  const logout = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='signUp-screen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" name="email" placeholder='Email' />
        <input ref={passwordRef} type="password" name="password" placeholder="Password" />
        <button type='submit' onClick={login}>Sign In</button>
      </form>
      <div className='link'>
        <span>New to Netflix? <a href="/" onClick={register}>Sign up now.</a></span>
      </div>
    </div>
  )
}

export default SignUpScreen;