import { useState } from "react";

export default function App() {
  const [showHint, setShowHint] = useState<boolean>(false);
  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      <button
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        {showHint ? "Hide hint" : "Show hint"}
      </button>
    </div>
  );
}

const Form = () => {
  const [text, setText] = useState<string>("");
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
};
