export default function ServiceCard(props: { title: string, img: string, href: string }) : JSX.Element {
    return (
        <article className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <a href={props.href} className="btn btn-primary text-white mt-3">Make Reservation</a>
            </div>
        </article>
    )
}