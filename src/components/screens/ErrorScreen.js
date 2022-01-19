import './ErrorScreen.css';

const ErrorScreen = () => {
  return (
    <div 
      className='error'
      style={{
        backgroundImage: `url("./images/bg-lost-in-space.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}>
      <h1 className='error-header'>Lost your way?</h1>
      <div className='error-content'>
        <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
        <a href="/">
          <button className='error-btn'>Netflix Home</button>
        </a>
        <div className='error-code'>
          <p>Error Code <strong>NSES-404</strong></p>
        </div>
      </div>
    </div>
  )
}

export default ErrorScreen;
