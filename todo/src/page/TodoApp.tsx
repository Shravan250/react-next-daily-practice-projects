import React from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import { useTodo } from "../hooks/TodoProvider";

const TodoApp = () => {
  const { tasks } = useTodo();

  return (
    <div className="mx-auto my-10 max-w-md w-full p-6 flex flex-col items-center rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My Tasks</h1>
      <div className="w-full h-px bg-gray-200 mb-4"></div>

      <TaskForm />

      <div className="w-full mt-6 space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
