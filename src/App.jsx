import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import TodoListEmpty from "./components/TodoListEmpty";

export default function App() {
  const [todos, setTodos] = useState(getFromLocalStorage);

  function handleAddNewTodo(newTodo) {
    setTodos((todo) => [...todo, newTodo]);
  }

  function handleDeleteTodo(id) {
    setTodos((todo) => todo.filter((item) => item.id !== id));
  }

  function handleChangeTodoStats(id) {
    setTodos((todo) =>
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function getFromLocalStorage() {
    if (window.localStorage.getItem("todos")) {
      return JSON.parse(window.localStorage.getItem("todos"));
    } else {
      return [];
    }
  }

  function setToLocalStorage() {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  useEffect(setToLocalStorage, [todos]);

  const isFoundTodo = todos.length;

  return (
    <>
      <Header />
      <Main>
        <TodoForm onAddNewTodo={handleAddNewTodo} />
        <TodoStats todos={todos} />
        {isFoundTodo ? (
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onChangeTodoStats={handleChangeTodoStats}
          />
        ) : (
          <TodoListEmpty />
        )}
      </Main>
    </>
  );
}
