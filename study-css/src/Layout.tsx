import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1 className="bg-blue-400 text-white">header</h1>
      <Outlet />
    </>
  );
};
