import React, { FC, useState } from 'react';

const Counter: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <button onClick={() => setCount((count: number) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Counter;