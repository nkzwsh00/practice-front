import { Board } from "./Board";
import { useState, FC, SetStateAction } from "react";

export const Sanmoku: FC = () => {
  const [history, setHistory] = useState<Array<Array<string | null>>>([
    Array(3).fill(Array(3).fill(null)),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: (string | null)[][]): void => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares] as (
      | string
      | null
    )[][];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: SetStateAction<number>): void => {
    setCurrentMove(nextMove);
  };
  const moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      return (
        <li key={move}>
          <p className="p-2">{"You are at move #" + move}</p>
        </li>
      );
    }
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          className="border boder-cyan-600 bg-cyan-600 text-white p-2"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
        {history[move].map((row) => row.join(",")).join(",")}
      </li>
    );
  });

  return (
    <div>
      <div className="p-2">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

// 着手履歴を（x,y）で表示する関数
