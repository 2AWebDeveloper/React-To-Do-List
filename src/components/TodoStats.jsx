export default function TodoStats({ todos }) {
  const allTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="flex items-center justify-between mt-10 sm:mt-16">
      <div className="flex items-start gap-2">
        <span className="font-bold text-sm text-blue">Tasks created</span>
        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-gray-400">
          {allTodos}
        </span>
      </div>
      <div className="flex items-start gap-2">
        <span className="font-bold text-sm text-purple">Completed</span>
        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-gray-400">
          {completedTodos} of {allTodos}
        </span>
      </div>
    </div>
  );
}
