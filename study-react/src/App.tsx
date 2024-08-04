import { useState } from "react";

export default function App() {
  const [showHint, setShowHint] = useState<boolean>(false);
  if (showHint) {
    return (
      <div>
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
        <Form />
        <button
          onClick={() => {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      </div>
    );
  }
  return (
    <div>
      <Form />
      <button
        onClick={() => {
          setShowHint(true);
        }}
      >
        Show hint
      </button>
    </div>
  );
}

const Form = () => {
  const [text, setText] = useState<string>("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
};
