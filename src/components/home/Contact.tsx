import ContactCard from "./ContactCard.tsx";
import Thomas from "../../assets/img/contact-thomas.webp";
import Sekar from "../../assets/img/contact-sekar.webp";

export default function Contact() : JSX.Element {
    return (
        <section id="contact" className="p-5">
            <h2 className="text-info text-center p-5 h1">Contact Us</h2>

            <div className="container">
                <div className="row justify-content-center text-center">
                    <ContactCard name={"Thomas"} img={Thomas} phoneNumber={"628123456789"}/>
                    <ContactCard name={"Sekar"} img={Sekar} phoneNumber={"628164829372"}/>
                </div>
            </div>
        </section>
    )
}