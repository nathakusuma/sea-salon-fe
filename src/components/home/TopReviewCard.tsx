import { Review } from "../../types/review.ts";

export default function TopReviewCard(props: { review: Review }): JSX.Element {
    return (
        <article className="card overflow-y-auto p-2" style={{
            width: "16rem",
            height: "16rem",
        }}>
            <div className="card-title fw-semibold">{props.review.customerName}</div>
            <div className="card-subtitle d-flex">
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
            </div>
            <p className="card-text mt-1">{props.review.comment}</p>
        </article>
    )
}