import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex justify-between gap-1 bg-blue-400 text-white">
        <h1>header</h1>
        <nav className="flex flex-col">
          <Link to="/main">Main</Link>
          <Link to="/about">About</Link>
          <Link to="/sanmoku">Sanmoku</Link>
        </nav>
      </div>
      <p>エラー</p>
    </>
  );
};

export default ErrorPage;
