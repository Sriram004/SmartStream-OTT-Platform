import { useState } from 'react';
import API from '../api';

export default function Login({ setToken }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full p-2 border" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-green-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
}
