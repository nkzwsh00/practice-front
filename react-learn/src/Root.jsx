import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
        <h1>header</h1>
        <Link to="/app" style={{ color: 'lightblue', textDecoration: 'none' }}>TOP</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
