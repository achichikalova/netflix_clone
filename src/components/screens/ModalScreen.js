import './ModalScreen.css';

const ModalScreen = () => {
  return (
    <div className='modalScreen-container'>
      <div className="modalScreen-body">
        <button>X</button>
        <div className="modalScreen-title">
          <h1>Movie title</h1>
        </div>
        <div className="modalScreen-info">
          <p>Description</p> 
          <div className="modalScreen-rating">Rating</div>
        </div>
        <button>Play</button>
      </div>
      
    </div>
  )
}

export default ModalScreen;
