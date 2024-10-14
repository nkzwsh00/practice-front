import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div className="bg-slate-400 border border-cyan-200">
        <h1>TITLE</h1>
        <nav>
          <ul>
            <li>
              <Link to={`ajax`}>ajax</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
