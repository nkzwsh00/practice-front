import { Link, Outlet } from "react-router-dom";
import { TodoProvider } from "../context/TodoContext";

export const Layout = () => {
  return (
    <>
      <div className="bg-slate-400 border border-cyan-200 flex flex-col py-1 px-2">
        <h1 className="font-bold">TITLE</h1>
        <div className="relative group">
          menu
          <div className="hidden group-hover:block absolute bg-white border border-gray-300">
            <nav className="">
              <ul className="space-y-1">
                <li>
                  <Link
                    to={`/`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    top
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/todo`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    todo
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="pt-20" id="detail">
        <TodoProvider>
          <Outlet />
        </TodoProvider>
      </div>
    </>
  );
};
