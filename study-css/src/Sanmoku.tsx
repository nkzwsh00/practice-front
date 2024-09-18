import { Board } from "./Board";
import { useState, FC } from "react";

export const Sanmoku: FC = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const currentSquares: string | null = history[history.length - 1];

  const handlePlay = (currentSquares: (string | null)[]): void => {
    console.log("handlePlay");
    setHistory([...history, currentSquares]);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="p-2">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
  );
};
