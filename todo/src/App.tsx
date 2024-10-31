import { useState, useEffect } from "react";
import { useLocalStorage } from "./hooks";
import { ThemeContext, ThemeToggle } from "./ThemeToggle";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Task type
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const ItemType = {
  TASK: "task",
};

const DraggableTask = ({
  task,
  index,
  moveTask,
  toggleTask,
  deleteTask,
  editTask,
}) => {
  const [, ref] = useDrag({
    type: ItemType.TASK,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.TASK,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <li ref={(node) => ref(drop(node))} className="px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <p
            className={`ml-3 text-sm ${
              task.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {task.text}
          </p>
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => editTask(task.id)}
            className="text-teal-600 hover:text-teal-900"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="ml-2 text-red-600 hover:text-red-900"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [isDark, setIsDark] = useState(true);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (fromIndex: number, toIndex: number) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    document.body.className = isDark ? "dark" : "light";
  }, [isDark]);

  function editTask(id: number): void {
    const text = prompt("Edit task:");
    if (text) {
      setTasks(
        tasks.map((task) => (task.id === id ? { ...task, text } : task))
      );
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div
          className={`min-h-screen p-8 ${
            isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-2">
              <h1 className="text-gray-800 font-bold text-2xl uppercase">
                Task List
              </h1>
              <ThemeToggle />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addTask();
              }}
              className="w-full max-w-sm mx-auto px-4 py-2"
            >
              <div className="flex items-center border-b-2 border-teal-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Add a task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
            <ul className="divide-y divide-gray-200">
              {filteredTasks.map((task, index) => (
                <DraggableTask
                  key={task.id}
                  task={task}
                  index={index}
                  moveTask={moveTask}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              ))}
            </ul>
          </div>
        </div>
      </ThemeContext.Provider>
    </DndProvider>
  );
};

export default TaskManager;
