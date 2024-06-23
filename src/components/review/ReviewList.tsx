import {useEffect, useState} from "react";
import {Review, GetReviewsRequest} from "../../types/review.ts";
import {getReviewsLazy} from "../../api/services/reviews.ts";
import ReviewElement from "./ReviewElement.tsx";

const MAX_FETCH = 10;

export default function ReviewList() : JSX.Element {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
    const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true);

    const getReviews = async (action: string, idPivot: string) => {
        const request: GetReviewsRequest = {
            limit: MAX_FETCH,
            action: action,
            idPivot: idPivot,
        };
        try {
            const response = await getReviewsLazy(request);
            const len = response.data.payload.length;
            if (len < MAX_FETCH) {
                if (action === "next") {
                    setIsNextDisabled(true);
                    setIsPrevDisabled(false);
                }
                else if (action === "prev") {
                    setIsPrevDisabled(true);
                    setIsNextDisabled(false);
                }
                else {
                    setIsNextDisabled(true);
                    setIsPrevDisabled(true);
                }
            } else {
                setIsNextDisabled(false);
                setIsPrevDisabled(false);
            }
            if (len == 0) {
                if (action === "next") {
                    setIsNextDisabled(true);
                    setIsPrevDisabled(false);
                }
                else if (action === "prev") {
                    setIsPrevDisabled(true);
                    setIsNextDisabled(false);
                }
                else {
                    setIsNextDisabled(true);
                    setIsPrevDisabled(true);
                }
            }
            else setReviews(response.data.payload);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReviews("", "");
    }, []);

    return (
        <section id="reviews" className="container pt-5">
            <div className="row row-cols-1 row-cols-md-1 g-4 align-content-center">
                {reviews.length > 0 ? (
                    reviews.map((review : Review) => (
                        <div key={review.id} className="col d-flex justify-content-center">
                            <ReviewElement review={review}/>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet</p>
                )}
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className={`btn btn-primary text-white mt-5 me-4${isPrevDisabled ? " disabled" : ""}`} onClick={() => getReviews("prev", reviews[0].id)}>
                    Prev
                </button>
                <button type="button" className={`btn btn-primary text-white mt-5${isNextDisabled ? " disabled" : ""}`} onClick={() => getReviews("next", reviews[reviews.length - 1].id)}>
                    Next
                </button>
            </div>
        </section>
    )
}