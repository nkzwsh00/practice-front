import { FC } from "react";

type props = {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Square: FC<props> = ({ value, onClick }) => {
  return (
    <button
      className="border border-gray-900 p-2 size-8"
      onClick={() => onClick}
    >
      {value}
    </button>
  );
};
