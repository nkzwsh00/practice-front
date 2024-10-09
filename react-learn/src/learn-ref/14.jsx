import { useState, useRef } from "react";

export default function Chat14() {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  function handleChange(e) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }
  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + text);
    }, 3000);
  }

  return (
    <>
      <input value={text} onChange={(e) => handleChange(e)} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
