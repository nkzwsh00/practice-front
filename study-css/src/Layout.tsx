import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="flex justify-between gap-1 bg-blue-400 text-white">
        <h1>header</h1>
        <nav className="flex flex-col">
          <Link to="/main">Main</Link>
          <Link to="/about">About</Link>
          <Link to="/sanmoku">Sanmoku</Link>
          <Link to="/tic-tac-toe">TicTacToe</Link>
          <Link to="/slay">Slay</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
