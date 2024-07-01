import ServiceCard from "./ServiceCard.tsx";
import {useEffect, useState} from "react";
import {Service} from "../../types/service.ts";
import {getAllServices} from "../../api/services/service.ts";

export default function Services() : JSX.Element {
    const [services, setServices] = useState<Service[]>();

    useEffect(() => {
        getAllServices().then((response) => {
            setServices(response.data.payload);
        });
    }, []);

    return (
        <section id="services" className="container p-5 text-center">
            <div className="col-12 p-5">
                <h2 className="h1 text-info">Our Services</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 justify-content-center">
                {services ? services.map((service) => {
                    return (
                        <ServiceCard key={service.id} service={service}/>
                    );
                }) : <p>No services yet</p>}
            </div>
        </section>
    )
}