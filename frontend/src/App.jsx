import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forum from './pages/Forum';
import Appointment from './pages/Appointments';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/appointments" element={<Appointment />} />
        
      </Routes>
    </BrowserRouter>
  );
}
