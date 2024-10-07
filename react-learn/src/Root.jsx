import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div style={{ backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
        <h1>header</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link to="/app" style={{ color: 'lightblue', textDecoration: 'none' }}>TOP</Link>
          <div style={{  display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center' }}>
            <Link to="/chat" style={{ color: 'lightblue', textDecoration: 'none' }}>Chat</Link>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
