import { useState } from 'react';
import { api } from '../api';


export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });


  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    alert('Login successful!');
  };


  return (
    <form onSubmit={submit}>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })}/>
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })}/>
      <button type="submit">Login</button>
    </form>
  );
}
