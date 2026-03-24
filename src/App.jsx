import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/pages/login";
import Dashboard from "../src/pages/dashboard"
import ProtectedRoute from "./protectedroute/protectedroute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;