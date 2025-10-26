import { useState, useEffect } from 'react';
import './Bubblegame.css';

const Bubblegame = () => {
  const [bubbles, setBubbles] = useState([]);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [hit, setHit] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Generate bubbles - increased to 130
  const makeBubbles = () => {
    const newBubbles = [];
    for (let i = 0; i < 133; i++) {  // Changed from 126 to 130
      newBubbles.push(Math.floor(Math.random() * 10));
    }
    setBubbles(newBubbles);
  };

  // Get new hit value
  const getNewHit = () => {
    setHit(Math.floor(Math.random() * 10));
  };

  // Handle bubble click
  const handleBubbleClick = (clickedNum) => {
    if (gameOver) return;
    
    if (clickedNum === hit) {
      setScore(prev => prev + 10);
      makeBubbles();
      getNewHit();
    }
  };

  // Timer effect
  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setGameOver(true);
    }
  }, [timer, gameOver]);

  // Initialize game - hide navbar and folder on mount
  useEffect(() => {
    makeBubbles();
    getNewHit();
    
    // Hide navbar when game opens
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.display = 'none';
    }

    // Cleanup: show navbar when component unmounts
    return () => {
      if (navbar) {
        navbar.style.display = '';
      }
    };
  }, []);

  // Restart game
  const restartGame = () => {
    setTimer(60);
    setScore(0);
    setGameOver(false);
    makeBubbles();
    getNewHit();
  };

  return (
    <div className="bubble-game-wrapper">
      <div className="bubble-container">
        {/* Game Title */}
        <div className="bubble-header">
          <h1 className="game-title">Bubble Game</h1>
        </div>

        <div className="bubble-top">
          <div className="bubble-element">
            <h2>Hit</h2>
            <div className="bubble-box">{hit}</div>
          </div>
          <div className="bubble-element">
            <h2>Timer</h2>
            <div className="bubble-box">{timer}</div>
          </div>
          <div className="bubble-element">
            <h2>Score</h2>
            <div className="bubble-box">{score}</div>
          </div>
        </div>

        <div className="bubble-bottom">
          {gameOver ? (
            <div className="game-over">
              <h1>GAME OVER!</h1>
              <p>Final Score: {score}</p>
              <button className="restart-btn" onClick={restartGame}>
                Play Again
              </button>
            </div>
          ) : (
            bubbles.map((num, index) => (
              <div
                key={index}
                className="bubble"
                onClick={() => handleBubbleClick(num)}
              >
                {num}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Bubblegame;
