import { useState } from 'react';
import API from '../api';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/auth/register', form);
    alert('Registration successful. Please login.');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input className="w-full p-2 border" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="w-full p-2 border" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-blue-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
}
