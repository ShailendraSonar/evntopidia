import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-full h-screen flex justify-center ">
    <div className="">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
