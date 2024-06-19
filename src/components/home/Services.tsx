import ServiceCard from "./ServiceCard.tsx";
import HaircutsAndStyling from "../../assets/img/haircuts-and-styling.webp";
import ManicureAndPedicure from "../../assets/img/manicure-and-pedicure.webp";
import FacialTreatments from "../../assets/img/facial-treatments.webp";

export default function Services() : JSX.Element {
    return (
        <section id="services" className="container p-5 text-center">
            <div className="col-12 p-5">
                <h2 className="h1 text-info">Our Services</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <div className="col h-100 d-flex justify-content-center">
                    <ServiceCard href={"#"} title={"Haircuts and Styling"} img={HaircutsAndStyling}/>
                </div>
                <div className="col h-100 d-flex justify-content-center">
                    <ServiceCard href={"#"} title={"Manicure and Pedicure"} img={ManicureAndPedicure}/>
                </div>
                <div className="col h-100 d-flex justify-content-center">
                    <ServiceCard href={"#"} title={"Facial Treatments"} img={FacialTreatments} />
                </div>
            </div>
        </section>
    )
}