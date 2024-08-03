import React, { FC, useState } from "react";

export default function SyncedInputs() {
  return (
    <>
      <Input label="First input" />
      <Input label="Second input" />
    </>
  );
}

const Input: FC<{ label: string }> = ({ label }) => {
  const [text, setText] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value);
  }

  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
};
