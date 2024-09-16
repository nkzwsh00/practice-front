import { Board } from "./Board";
import { useState, FC } from "react";

export const Sanmoku: FC = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState(Array(9).fill(" "));
  const currentSquares = history[history.length - 1];

  const handlePlay = (): void => {
    console.log("handlePlay");
    setHistory([...history, currentSquares]);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="p-2">
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={() => handlePlay}
      />
    </div>
  );
};
