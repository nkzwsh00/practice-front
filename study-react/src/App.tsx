import { useState } from "react";

export default function Toggle() {
  //const isOnRef = useRef(false);
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => {
        setIsOn((prev) => !prev);
      }}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
}
