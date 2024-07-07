import Logo from "../../assets/img/logo.png";
import {useAuth} from "../../hooks/useAuth.ts";
import "./navbar.css";

const Navbar: React.FC = () => {
    const isAuthenticated = useAuth();

    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand d-flex" href="/#">
                    <img src={Logo} alt="logo" width={"40px"} />
                    <div className="h3 ms-2 mb-0 align-self-center"><strong>SEA SALON</strong></div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/#branches">Branches</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/#contact">Contact</a>
                        </li>
                        {isAuthenticated ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">My Account</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li className="dropdown-item">
                                        <a href="/logout"><button className="btn btn-outline-danger btn-sm px-3">Log out</button></a>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item d-flex align-items-center ms-1">
                                <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Log in</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
