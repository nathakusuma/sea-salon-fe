import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"
import "./assets/css/bootstrap-custom.css"
import "@popperjs/core/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import HomePage from "./pages/HomePage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </Router>
    )
}

export default App
