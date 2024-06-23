export default function Footer(): JSX.Element {
    return (
        <footer className="text-center text-white bg-primary mt-5">
            <div className="container p-4 pb-0">
                <section className="">
                    <p className="d-flex justify-content-center align-items-center">
                        <span className="me-3">Redefine your style!</span>
                        <a href="#contact">
                            <button type="button" className="btn btn-outline-light btn-rounded">
                                Make Reservation
                            </button>
                        </a>
                    </p>
                </section>
            </div>

            <div className="text-center p-3">
                © 2024 Copyright<br></br>
                SEA SALON<br></br>
                by <span></span>
                <a className="text-white" href="https://nathakusuma.com/">I Putu Natha Kusuma</a><br></br>
            </div>
        </footer>
    )
}