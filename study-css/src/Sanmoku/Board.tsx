import { FC } from "react";
import { Square } from "./Square";

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[][];
  onPlay: (squares: (string | null)[][]) => void;
};

export const Board: FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number, j: number): void => {
    if (squares[i][j] || calculateWinner(squares)) {
      return;
    }
    // [i][j]にxIsNextの値を入れた新しいsquaresを作成
    const nextSquares: (string | null)[][] = [
      ...squares.slice(0, i),
      [
        ...squares[i].slice(0, j),
        xIsNext ? "X" : "O",
        ...squares[i].slice(j + 1),
      ],
      ...squares.slice(i + 1),
    ];
    onPlay(nextSquares);
  };
  const winner = calculateWinner(squares);
  const winningLine = calculateLine(squares);
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
        {squares.map((row, rowIndex) => (
          <div>
            {row.map((col, colIndex) => {
              const isWinningSquare = winningLine?.some(
                ([winRow, winCol]) => winRow === rowIndex && winCol === colIndex
              );
              return (
                <Square
                  key={rowIndex * row.length + colIndex}
                  value={col}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  isWinning={isWinningSquare}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// 勝者を計算する関数
const calculateWinner = (squares: (string | null)[][]): string | null => {
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (
      squares[a[0]][a[1]] &&
      squares[a[0]][a[1]] === squares[b[0]][b[1]] &&
      squares[a[0]][a[1]] === squares[c[0]][c[1]]
    ) {
      return squares[a[0]][a[1]];
    }
  }
  return null;
};

// 一列に揃ったsquareの配置を返す関数
const calculateLine = (squares: (string | null)[][]): number[][] | null => {
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (
      squares[a[0]][a[1]] &&
      squares[a[0]][a[1]] === squares[b[0]][b[1]] &&
      squares[a[0]][a[1]] === squares[c[0]][c[1]]
    ) {
      return winPatterns[i];
    }
  }
  return null;
};

const winPatterns = [
  // 横
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  // 縦
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  // 斜め
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];
