import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forum from './pages/Forum';
import Appointments from './pages/Appointments';
import SymptomChecker from './pages/SymptomChecker';
import StudentHome from './pages/Student/StudentHome'
import StudentQA from './pages/Student/StudentQA';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/student/appointments" element={<Appointments />}/>
        <Route path="/student/symptom-checker" element={<SymptomChecker />}/>
        <Route path="/student/home" element={<StudentHome />}/>
        <Route path="/student/qa" element={<StudentQA />}/>
       
      </Routes>
    </BrowserRouter>
  );
}
