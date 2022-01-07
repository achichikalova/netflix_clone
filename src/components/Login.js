import './Login.css';

const Login = () => {
  return (
    <header 
      className='login' 
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("./images/login.jpg")`,
        backgroundPosition: "center center"
      }}
    >
      <div className="login-contents">
        <h1 className='login-title'>Unlimited movies, TV shows, and more.</h1>
        <h2 className='login-subtitle'>Watch anywhere. Cancel anytime.</h2>
        <h3 className='email-title'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form className='email-form'>
          <input type="text" name="" id="" placeholder='Email address'/>
          <button>Get Started &gt;</button>
        </form>
      </div>
    </header>
  )
}

export default Login;