import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div className="bg-slate-400 border border-cyan-200">
        <h1>TITLE</h1>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>リンク1</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>リンク2</Link>
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
