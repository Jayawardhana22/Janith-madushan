import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Hrdashboard } from "./components/Hrdashboard";

// Navbar Component (Only for selected pages)
function Navbar() {
  const location = useLocation();
  const hideNavRoutes = ["/", "/register", "/hrdashboard"]; // Do not show navbar on these pages

  if (hideNavRoutes.includes(location.pathname)) {
    return null; // Do not render anything
  }

  return (
    <nav>
      <a href="/register" className="nav-link">Register</a>
      <a href="/" className="nav-link">Login</a>
      <a href="/hrdashboard" className="nav-link">Dashboard</a>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be conditionally rendered */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hrdashboard" element={<Hrdashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
