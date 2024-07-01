import {Service} from "../../types/service.ts";

export default function ServiceCard(props: { service : Service }) : JSX.Element {
    return (
        <article className="card p-0 m-4" style={{width: "20rem"}}>
            <img src={props.service.imageUrl} className="card-img-top" alt={props.service.name} style={{
                width: '100%',
                height: '20rem',
                objectFit: 'cover'
            }}/>
            <div className="card-body">
                <h5 className="card-title">{props.service.name}</h5>
                <p className="card-text fw-light fs-6">{props.service.description}</p>
            </div>
            <div className="card-footer">
                <p className="m-1">Duration: {props.service.durationMinute} minutes</p>
                <p className="m-1">Price: IDR {props.service.price}</p>
            </div>
        </article>
    )
}