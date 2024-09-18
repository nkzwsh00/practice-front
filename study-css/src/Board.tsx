import { FC } from "react";
import { Square } from "./Square";

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: string | null) => void;
};

export const Board: FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number): void => {
    console.log("handleClick");
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares: (string | null)[] = [
      ...squares.slice(0, i),
      xIsNext ? "X" : "O",
      ...squares.slice(i + 1),
    ];
    onPlay(nextSquares);
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }
  return (
    <div className="p-2">
      <div>{status}</div>
      <div>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

const calculateWinner = (squares: (string | null)[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
