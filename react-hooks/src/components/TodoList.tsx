import React from "react";
import { Link } from "react-router-dom";
import { useTodo } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const { todos } = useTodo();

  return (
    <div>
      <Link
        to="/todo/add"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block"
      >
        Add Todo
      </Link>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
