import { FC, useState, useEffect } from "react";

type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const Page1: FC = () => {
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error("Fetching data failed", error));
  }, []);

  if (!task) return <div>Loading...</div>;

  return (
    <>
      <h1>Task Information</h1>
      <p>Title: {task.title}</p>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>
    </>
  );
};
