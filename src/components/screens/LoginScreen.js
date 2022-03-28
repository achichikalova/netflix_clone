import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

const LoginScreen = ({ signUp, setSignUp }) => {  

  return (
    <header 
      className='loginScreen'
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0.2) 60%,rgba(0,0,0,.8) 100%), url("./images/login.jpg")`,
        backgroundPosition: "center center no-repeat"
      }}
    >
      {signUp ? (
        <SignUpScreen />
      ) : (
        <div className="loginScreen-contents">
          <h1 className='loginScreen-title'>Unlimited movies, TV shows, and more.</h1>
          <h2 className='loginScreen-subtitle'>Watch anywhere. Cancel anytime.</h2>
          <h3 className='email-title'>Ready to watch? Enter your email to create or restart your membership.</h3>
          <form className='email-form'>
            <input type="email" name="email" placeholder='Email address'/>
            <button onClick={() => setSignUp(true)}>Get Started &gt;</button>
          </form>
        </div>
      )}
      <div className="loginScreen--gradient"></div>
    </header>
  )
}

export default LoginScreen;