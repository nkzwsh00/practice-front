import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

export const EditTodo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { todos, editTodo } = useTodo();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const todo = todos.find((t) => t.id === Number(id));
    if (todo) {
      setText(todo.text);
    }
  }, [id, todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && id) {
      editTodo(Number(id), text);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Edit todo"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Todo
      </button>
    </form>
  );
};
