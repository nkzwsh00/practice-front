import { ReactNode } from "react";

const PrimaryButton = ({ children, ...props }: { children: ReactNode }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};

export { PrimaryButton };
