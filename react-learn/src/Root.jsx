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
            <Link to="/toggle" style={{ color: 'lightblue', textDecoration: 'none' }}>Toggle</Link>
            <Link to="/dashboard" style={{ color: 'lightblue', textDecoration: 'none' }}>Dashboard</Link>
            <Link to="/chat14" style={{ color: 'lightblue', textDecoration: 'none' }}>Chat14</Link>
          </div>
          <div style={{  display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center' }}>
            <Link to="/videoPlayer" style={{ color: 'lightblue', textDecoration: 'none' }}>VideoPlayer</Link>
            </div>
        </div>
      </div>
      <div style={{padding: '25px'}}>
        <Outlet />
      </div>
    </>
  );
}
