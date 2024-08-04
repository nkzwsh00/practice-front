import React, { FC, useState } from "react";

export default function SyncedInputs() {
  const [text, setText] = useState<string>("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="First input" text={text} handleChange={handleChange} />
      <Input label="Second input" text={text} handleChange={handleChange} />
    </>
  );
}

const Input: FC<{
  label: string;
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, text, handleChange }) => {
  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
};
