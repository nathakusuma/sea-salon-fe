import TopReviewCard from "./TopReviewCard.tsx";
import {useEffect, useState} from 'react';
import {GetReviewsRequest, Review} from "../../types/review.ts";
import {getReviewsLazy} from "../../api/services/reviews.ts";

export default function TopReviews(): JSX.Element {
    const [reviews, setReviews] = useState<Review[]>([]);

    const getReviews = async () => {
        const request: GetReviewsRequest = {
            limit: 4,
            action: "top",
            idPivot: "",
        };
        try {
            const response = await getReviewsLazy(request);
            setReviews(response.data.payload);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReviews();
    }, []);

    return (
        <section id="reviews" className="container p-5">
            <h2 className="h1 text-info p-5 text-center">Top Reviews</h2>

            {reviews.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-4 g-4 align-content-center justify-content-center">
                    {reviews.map((review : Review) => (
                    <div key={review.id} className="col h-100 d-flex justify-content-center">
                        <TopReviewCard review={review}/>
                    </div>
                    ))}
                </div>
            ) : (
                <p className="d-flex justify-content-center">No reviews yet</p>
            )}
            <div className="d-flex justify-content-center">
                <a href="/reviews">
                    <button type="button" className="btn btn-primary text-white mt-5">
                        Show More
                    </button>
                </a>
            </div>


        </section>
    )
}