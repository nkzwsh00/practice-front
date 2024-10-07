import { FC } from "react";
import { Ref1_1_Chat } from "./challenges/Ref1_1_Chat"; // Adjust the import path as necessary

export const Learn: FC = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-lg">Learn</h1>
        <p>This is the learn page. You can learn things here.</p>
      </div>
      <Ref1_1_Chat />
    </>
  );
};

// https://ja.react.dev/learn/escape-hatches を参考にしています。
