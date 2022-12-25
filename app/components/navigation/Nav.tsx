import { Link } from "@remix-run/react";

export const Nav = () => {
  return (
    <nav className="container mx-auto py-4 border-dashed border-b border-indigo-600">
      <ul className="flex flex-row gap-4 items-center">
        <li className="mr-auto">
          <Link
            className="rounded-md p-2 hover:bg-gray-200 text-lg font-medium"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link className="rounded-md p-2 hover:bg-gray-200" to="/cards-client">
            Cards (Client)
          </Link>
        </li>
        <li>
          <Link className="rounded-md p-2 hover:bg-gray-200" to="/cards">
            Cards (Server)
          </Link>
        </li>
      </ul>
    </nav>
  );
};
