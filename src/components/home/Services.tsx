import ServiceCard from "./ServiceCard.tsx";

export default function Services() : JSX.Element {
    return (
        <section id="services" className="container p-5 text-center">
            <div className="col-12 p-5">
                <h2 className="h1 text-info">Our Services</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <div className="col h-100 d-flex justify-content-center">
                    <ServiceCard href={"#"} title={"Haircuts and Styling"} img={"/src/assets/img/haircuts-and-styling.webp"}/>
                </div>
                <div className="col h-100 d-flex justify-content-center">
                    <ServiceCard href={"#"} title={"Manicure and Pedicure"} img={"/src/assets/img/manicure-and-pedicure.webp"}/>
                </div>
                <div className="col h-100 d-flex justify-content-center">
                    <ServiceCard href={"#"} title={"Facial Treatments"} img={"/src/assets/img/facial-treatments.webp"} />
                </div>
            </div>
        </section>
    )
}