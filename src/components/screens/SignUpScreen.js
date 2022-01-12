import './SignUpScreen.css';

const SignUpScreen = () => {

  const register = (e) => {
    e.preventDefault();
  }

  const signIn = (e) => {
    e.preventDefault();
  }

  return (
    <div className='signUp-screen'>
      <form action="">
        <h1>Sign In</h1>
        <input type="email" name="email" placeholder='Email' />
        <input type="password" name="password" placeholder="Password" />
        <button type='submit' onClick={signIn}>Sign In</button>
      </form>
      <div className='link'>
        <span>New to Netflix? <a href="/" onClick={register}>Sign up now.</a></span>
      </div>
    </div>
  )
}

export default SignUpScreen;