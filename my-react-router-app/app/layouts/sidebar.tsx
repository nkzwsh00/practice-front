import { Outlet } from "react-router";

export const Sidebar = () => {
  return (
    <div className="flex bg-slate-600">
      <div>
        <h1>Tiiiiiittttt</h1>
      </div>
      <Outlet />
    </div>
  );
};
