import React, { createContext, useContext, useState, ReactNode } from "react";

// Define your Task shape
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Context value shape
interface TodoContextValue {
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, text: string) => void;
  toggleTask: (id: number) => void;
}

const TodoContext = createContext<TodoContextValue | null>(null);

// Provider component
export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Example task 1", completed: false },
    { id: 2, text: "Example task 2", completed: true },
  ]);

  // Core operations
  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (id: number, text: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <TodoContext.Provider
      value={{ tasks, addTask, deleteTask, editTask, toggleTask }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook
export const useTodo = (): TodoContextValue => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be within a TodoProvider");
  }
  return context;
};
