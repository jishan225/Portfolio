import React, { useState, useEffect, useRef } from 'react';
import './SimonGame.css';

const SimonGame = () => {
  const [gameSeq, setGameSeq] = useState([]);
  const [userSeq, setUserSeq] = useState([]);
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Press Any Key or Click Start");
  const [isFlashing, setIsFlashing] = useState(null);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const colors = ["red", "green", "yellow", "pink"];
  const audioRef = useRef({});

  // Hide body background when component mounts
  useEffect(() => {
    document.body.style.background = 'none';
    document.body.style.backgroundColor = 'transparent';
    
    return () => {
      // Optional: Restore background when component unmounts
      document.body.style.background = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  // Keyboard event listener
  useEffect(() => {
    const handleKeyPress = () => {
      if (!started) {
        startGame();
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [started]);

  const startGame = () => {
    setStarted(true);
    setGameOver(false);
    setLevel(0);
    setGameSeq([]);
    setUserSeq([]);
    levelUp([], 0);
  };

  const levelUp = (currentSeq = gameSeq, currentLevel = level) => {
    const newLevel = currentLevel + 1;
    setLevel(newLevel);
    setMessage(`Level ${newLevel}`);
    setUserSeq([]);
    setIsUserTurn(false);

    const randomIdx = Math.floor(Math.random() * 4);
    const randomColor = colors[randomIdx];
    const newSeq = [...currentSeq, randomColor];
    setGameSeq(newSeq);

    setTimeout(() => {
      playSequence(newSeq);
    }, 500);
  };

  const playSequence = async (sequence) => {
    for (let i = 0; i < sequence.length; i++) {
      await flashButton(sequence[i]);
      await delay(300);
    }
    setIsUserTurn(true);
  };

  const flashButton = (color) => {
    return new Promise((resolve) => {
      setIsFlashing(color);
      setTimeout(() => {
        setIsFlashing(null);
        resolve();
      }, 400);
    });
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleButtonClick = (color) => {
    if (!started || !isUserTurn || gameOver) return;

    const newUserSeq = [...userSeq, color];
    setUserSeq(newUserSeq);

    setIsFlashing(color);
    setTimeout(() => setIsFlashing(null), 250);

    checkAnswer(newUserSeq);
  };

  const checkAnswer = (currentUserSeq) => {
    const currentIdx = currentUserSeq.length - 1;

    if (currentUserSeq[currentIdx] !== gameSeq[currentIdx]) {
      handleGameOver();
    } else if (currentUserSeq.length === gameSeq.length) {
      setIsUserTurn(false);
      setTimeout(() => {
        levelUp(gameSeq, level);
      }, 1000);
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
    setIsUserTurn(false);
    
    if (level > highScore) {
      setHighScore(level);
    }

    setMessage(`Game Over! Score: ${level} | High Score: ${level > highScore ? level : highScore}`);
    
    document.body.classList.add('game-over-flash');
    setTimeout(() => {
      document.body.classList.remove('game-over-flash');
    }, 200);

    setStarted(false);
  };

  const getButtonClass = (color) => {
    let className = `simon-btn ${color}`;
    if (isFlashing === color) {
      className += ' flash';
    }
    return className;
  };

  return (
    <div className="simon-game-container">
      <div className="game-header">
        <h1 className="game-title">
          <span className="title-word">Simon</span>
          <span className="title-word">Says</span>
        </h1>
        <h2 className={`game-message ${gameOver ? 'game-over' : ''}`}>
          {message}
        </h2>
        
        <div className="game-stats">
          <div className="stat-box">
            <span className="stat-label">Level</span>
            <span className="stat-value">{level}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Highest Score</span>
            <span className="stat-value">{highScore}</span>
          </div>
        </div>

        {!started && (
          <button className="start-btn" onClick={startGame}>
            {gameOver ? '🔄 Play Again' : '🎮 Start Game'}
          </button>
        )}
      </div>

      <div className="simon-board">
        <div className="btn-row">
          <button 
            className={getButtonClass('red')}
            onClick={() => handleButtonClick('red')}
            disabled={!isUserTurn}
          >
            <span className="btn-number">1</span>
          </button>
          <button 
            className={getButtonClass('yellow')}
            onClick={() => handleButtonClick('yellow')}
            disabled={!isUserTurn}
          >
            <span className="btn-number">2</span>
          </button>
        </div>
        <div className="btn-row">
          <button 
            className={getButtonClass('green')}
            onClick={() => handleButtonClick('green')}
            disabled={!isUserTurn}
          >
            <span className="btn-number">3</span>
          </button>
          <button 
            className={getButtonClass('pink')}
            onClick={() => handleButtonClick('pink')}
            disabled={!isUserTurn}
          >
            <span className="btn-number">4</span>
          </button>
        </div>
        
        <div className="center-circle">
          <div className="inner-circle">
            <div className="pulse-ring"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimonGame;

