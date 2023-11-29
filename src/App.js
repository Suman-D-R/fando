import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import NotesContainer from "./components/NotesContainer.jsx";
import ArchiveContainer from "./components/ArchiveContainer.jsx";
import BinConatiner from "./components/BinConatiner.jsx";
import ErrorBoundry from "./components/ErrorBoundry.jsx";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
const router = createBrowserRouter([
  { path: "/", element: <Login />,errorElement: <ErrorBoundry /> },
  { path: "/signup", element: <RegisterForm /> },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "notes",
        index: true,
        element: <NotesContainer />,
      },
      { path: "/notes/:noteId", 
      element: <NotesContainer /> },
      {
        path: "archive",
        element: <ArchiveContainer />,
      },
      {
        path: "bin",
        element: <BinConatiner />,
      },
    ],
  },
]);

export default App;
