import './SignUpScreen.css';

const SignUpScreen = () => {
  return (
    <div className='signUp-screen'>
      <form action="">
        <h1>Sign In</h1>
        <input type="email" name="email" placeholder='Email' />
        <input type="password" name="password" placeholder="Password" />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default SignUpScreen;