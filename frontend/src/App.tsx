import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./feature/todo/TodoList";
import { ITodo } from "./shared/model/ITodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, text: "First Todo" },
    { id: 2, text: "Second Todo" },
  ]);

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default App;
