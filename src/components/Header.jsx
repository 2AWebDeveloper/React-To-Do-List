import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-center h-44 pb-5 bg-gray-700 sm:h-50">
      <img
        src={Logo}
        alt="logo - React TodoList"
      />
    </header>
  );
}
