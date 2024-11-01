import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-4 mb-8">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="text-blue-500 hover:text-blue-700">
              Create Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
