import { Link } from "react-router";
import DarkModeToggle from "./DarkMode";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white dark:bg-gray-900">
      <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        BlogSphere
      </Link>
      <DarkModeToggle />
    </nav>
  );
}
