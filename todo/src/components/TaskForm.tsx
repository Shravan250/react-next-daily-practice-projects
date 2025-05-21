import React, { useState } from "react";
import { useTodo } from "../hooks/TodoProvider";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center">
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-r-lg transition-colors duration-200"
        disabled={!task.trim()}
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
