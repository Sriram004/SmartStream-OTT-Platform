import { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Upload from './components/Upload';
import Player from './components/Player';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-4 mb-6">🎬 SmartStream OTT</h1>
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Register />
        </>
      ) : (
        <>
          <Upload />
          <Player />
          <button onClick={() => { localStorage.removeItem('token'); setToken(null); }} className="mt-4 bg-red-500 text-white p-2">Logout</button>
        </>
      )}
    </div>
  );
}
