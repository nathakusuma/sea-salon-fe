import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./assets/css/bootstrap-custom.css"
import "@popperjs/core/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./index.css"

// Route
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AuthRoute from "./components/routes/AuthRoute";

// Pages
import Home from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ReviewPage from "./pages/ReviewPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import Logout from "./components/auth/Logout";

function App() : JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reviews" element={<ReviewPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route element={<AuthRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<CustomerDashboardPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
