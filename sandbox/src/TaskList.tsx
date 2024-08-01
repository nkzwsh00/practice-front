import { useState } from "react";

export function TaskList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button
        onClick={() => {
          setTodos([...todos, newTodo]);
          setNewTodo("");
        }}
      >
        add
      </button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
