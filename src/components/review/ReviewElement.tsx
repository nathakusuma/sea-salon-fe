import { Review } from "../../types/review.ts";

export default function ReviewElement(props: { review: Review }): JSX.Element {
    return (
        <article className="p-1 border-primary border-1 border-bottom" style={{
            width: "40em",
            wordWrap: "break-word",
            overflowWrap: "break-word",
        }}>
            <div className="fw-semibold">{props.review.customerName}</div>
            <div className="d-flex">
                {[...Array(props.review.starRating)].map((_star, index) => {
                    return (
                        <i key={index} className="bi bi-star-fill text-warning"></i>
                    )
                })}
                {[...Array(5 - props.review.starRating)].map((_star, index) => {
                    return (
                        <i key={index} className="bi bi-star text-warning"></i>
                    )
                })}
                <p className="ms-2">{new Date(props.review.createdAt).toLocaleString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</p>
            </div>
            <p className="mt-1">{props.review.comment}</p>
        </article>
    )
}