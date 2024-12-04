import { useState, useEffect } from "react";
import Clock from "./Clock";
import "./App.css";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function App() {
  const time = useTime();
  const [color, setColor] = useState<string>("lightcoral");

  return (
    <>
      <div>
        <p>
          Pick a color:{" "}
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="lightcoral">lightcoral</option>
            <option value="midnightblue">midnightblue</option>
            <option value="rebeccapurple">rebeccapurple</option>
          </select>
        </p>
        <Clock color={color} time={time} />
      </div>
    </>
  );
}

export default App;
