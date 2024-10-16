import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

export const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};
