import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
const router = createBrowserRouter([
  {path: "*", Component: Root }
])

function Root() {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
