import React from "react";
import TodoApp from "./page/TodoApp";
import { TodoProvider } from "./hooks/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};

export default App;
