import IconClipboard from "../svg/IconClipboard";

export default function TodoListEmpty() {
  return (
    <div className="flex flex-col items-center gap-4 mt-6 text-center border-t border-t-gray-400 py-12">
      <IconClipboard className={"size-16 text-gray-300/50"} />
      <p className="max-w-96 text-gray-300">
        You dont have tasks registered yet Create tasks and organize your to-do
        items
      </p>
    </div>
  );
}
