import { FC } from "react";

type props = {
  key: number;
  value: string | null;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Square: FC<props> = ({ key, value, onClick }) => {
  return (
    <button
      key={key}
      className="border border-gray-900 p-2 size-8"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
