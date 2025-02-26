import IconCheck from "../svg/IconCheck";
import IconTrash from "../svg/IconTrash";

export default function TodoItem({ todoObj, onDeleteTodo, onChangeTodoStats }) {
  const isCompleted = todoObj.completed;

  return (
    <li
      className={`${
        isCompleted && "completed"
      } flex items-center gap-6 p-4 bg-gray-500 border border-gray-400 rounded-lg`}
    >
      <p className="grow text-sm leading-relaxed">{todoObj.content}</p>
      <div className="flex gap-2 self-start">
        <button
          onClick={() => onChangeTodoStats(todoObj.id)}
          className="flex items-center justify-center h-7 w-7 bg-gray-400 rounded-md transition-all delay-75 hover:bg-emerald/15 hover:text-emerald"
        >
          <IconCheck className={"size-4"} />
        </button>
        <button
          onClick={() => onDeleteTodo(todoObj.id)}
          className="flex items-center justify-center h-7 w-7 bg-gray-400 rounded-md transition-all delay-75 hover:bg-soft-red/15 hover:text-soft-red"
        >
          <IconTrash className={"size-4"} />
        </button>
      </div>
    </li>
  );
}
