import { useRef } from "react";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const forcusHandle = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      <nav>
        <button onClick={forcusHandle}>Search</button>
      </nav>
      <input ref={inputRef} placeholder="Looking for something?" />
    </>
  );
}
