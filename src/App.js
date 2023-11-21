import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterForm from './components/RegisterForm';
import Login from "./components/Login.js"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<RegisterForm />}></Route>
      <Route path="/login" element={<Login />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
