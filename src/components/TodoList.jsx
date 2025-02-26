import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDeleteTodo, onChangeTodoStats }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <ul className="flex flex-col gap-3 mt-6">
      {sortedTodos.map((todo) => (
        <TodoItem
          onChangeTodoStats={onChangeTodoStats}
          onDeleteTodo={onDeleteTodo}
          todoObj={todo}
          key={todo.id}
        />
      ))}
    </ul>
  );
}
