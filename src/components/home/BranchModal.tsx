import {Branch} from "../../types/branch.ts";
import Whatsapp from "../../assets/img/WhatsAppButtonGreenSmall.svg";

export default function BranchModal(props: {branch: Branch}) : JSX.Element {
    return (
        <article id={props.branch.id} className="modal fade" tabIndex={-1} aria-labelledby={props.branch.id} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content text-start">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">{props.branch.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <p className="fw-semibold mb-1">Open Time</p>
                            <p>{props.branch.openTime} - {props.branch.closeTime} {props.branch.timeZoneName}</p>
                        </div>
                        <div className="mb-3">
                            <p className="fw-semibold mb-1">Address</p>
                            <p className="mb-1">{props.branch.address}</p>
                            <a href={props.branch.mapsUrl} target="_blank">Open in Maps</a>
                        </div>
                        <div className="mb-3">
                            <p className="mb-1">Services</p>
                            {props.branch.services && props.branch.services.length > 0 ? (
                                <ul>
                                    {props.branch.services.map((service) => {
                                        return (
                                            <li key={service.id}>{service.name}</li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <p>No service available yet</p>
                            )}
                        </div>
                        <div className="mt-4">
                            <a href="/dashboard" className="btn btn-primary text-white me-2">Make Reservation</a>
                            <a aria-label="Chat on WhatsApp" target="_blank"
                               href={encodeURI(`https://wa.me/${props.branch.phone}?text="Hello, branch ${props.branch.name}! I want to ask something about SEA Salon."`)}>
                                <img alt="Chat on WhatsApp" src={Whatsapp}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}