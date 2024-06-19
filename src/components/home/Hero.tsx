import "./hero.css";
import BackgroundImage from "../../assets/img/hero.webp";

export default function Hero() : JSX.Element {
    return (
        <section id="home" className="hero px-3 overlay" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
                        <h2 className="display-3 fw-bold mb-3">Beauty and Elegance Redefined</h2>
                        <p className="lead mb-5">Experience unparalleled beauty and elegance at SEA Salon – where every visit redefines your style.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="#services">
                                <button type="button" className="btn btn-primary btn-lg text-white">Get Started</button>
                            </a>
                            <a href="#contact">
                                <button type="button" className="btn btn-outline-light btn-lg">Make Reservation</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}