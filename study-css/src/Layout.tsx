import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="bg-blue-400 text-white">
        <h1>header</h1>
        <nav>
          <Link to="/main">Main</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
