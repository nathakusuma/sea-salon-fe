import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/logo.png";

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        };

        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

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
                            <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} aria-current="page" href="/#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} href="/#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'branches' ? 'active' : ''}`} href="/#branches">Branches</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`} href="/reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'reservation' ? 'active' : ''}`} href="/#reservation">Reservation</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
