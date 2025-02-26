import { useState } from "react";
import IconPlus from "../svg/IconPlus";

export default function TodoForm({ onAddNewTodo }) {
  const [content, setContent] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!content) {
      alert("Please complete the field.");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      content,
      completed: false,
    };
    onAddNewTodo(newTodo);
    setContent("");
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        placeholder="Add a new task ..."
        className="grow w-full h-13 px-4 outline-none rounded-lg bg-gray-500 shadow-sm shadow-gray-700  transition-all border border-gray-500 focus:border-dark-purple placeholder:text-gray-300"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="flex items-center justify-center h-13 aspect-square rounded-lg bg-dark-blue transition-all delay-75 hover:bg-blue">
        <IconPlus className={"size-6"} />
      </button>
    </form>
  );
}
