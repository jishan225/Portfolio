import { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null);
  
  let status;
  if (winner) {
    status = `🎉 Winner: ${winner} 🎉`;
  } else if (isBoardFull) {
    status = "🤝 It's a Draw! 🤝";
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="tic-tac-toe">
      <h2 className="game-title">Tic Tac Toe</h2>
      <div className={`status ${winner ? 'winner' : ''}`}>{status}</div>
      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
            disabled={value !== null || winner !== null}
          >
            {value}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>🔄 Reset Game</button>
    </div>
  );
};

export default TicTacToe;
