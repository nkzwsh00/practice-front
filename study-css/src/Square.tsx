import { FC } from "react";

type props = {
  key: number;
  value: string | null;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isWinning?: boolean;
};

export const Square: FC<props> = ({ key, value, onClick, isWinning }) => {
  return (
    <button
      key={key}
      className={`border border-gray-900 p-2 size-8 ${
        isWinning ? "bg-green-500 text-white animate-pulse" : ""
      } `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
