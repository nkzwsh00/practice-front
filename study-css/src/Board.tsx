import { FC } from "react";
import { Square } from "./Square";

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
};

export const Board: FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number): void => {
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
      <div className="border border-gray-900 gap-1">
        {squares.map((value, index) => (
          <>
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
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
