import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import "./assets/css/bootstrap-custom.css"
import "@popperjs/core/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import HomePage from "./pages/HomePage.tsx";
import ReviewPage from "./pages/ReviewPage.tsx";
import ReservationPage from "./pages/ReservationPage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/reviews" element={<ReviewPage />}/>
                <Route path="/reservation" element={<ReservationPage />} />
            </Routes>
        </Router>
    )
}

export default App
