export default function ContactCard(props: { name: string, img: string, phoneNumber: string }) : JSX.Element {
    return (
        <article className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
                <img src={props.img} alt={props.name} width={"140px"} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">{props.name}</h5>
                <div className="small text-uppercase text-muted mb-2">{props.phoneNumber}</div>
                <a aria-label="Chat on WhatsApp" target="_blank" href={encodeURI(`https://wa.me/${props.phoneNumber}?text="Hello, ${props.name}! I want to ask something about SEA Salon."`)}>
                    <img alt="Chat on WhatsApp" src="/src/assets/img/WhatsAppButtonGreenSmall.svg"/>
                </a>
            </div>
        </article>
    )
}