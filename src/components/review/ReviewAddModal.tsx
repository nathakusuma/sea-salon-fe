import {useState} from "react";
import {createReview} from "../../api/services/reviews.ts";

export default function ReviewAddModal() : JSX.Element {
    const [starRating, setStarRating] = useState<number>(0);
    const [comment, setComment] = useState<string>("");

    const handleStarClick = (index: number) => {
        setStarRating(index + 1);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await createReview({
                starRating: starRating,
                comment: comment
            });
            window.alert(response.data.message)
            setStarRating(0);
            setComment("");
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center pt-3 pb-5">
                <button className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#reviewAddModal">
                    Add Your Review
                </button>
            </div>
            <div id="reviewAddModal" className="modal fade" tabIndex={-1} aria-labelledby="reviewAddModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="reviewAddModalLabel">Rate Us</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    {[...Array(5)].map((_, index) => (
                                        <i
                                            key={index}
                                            className={`bi ${index < starRating ? 'bi-star-fill' : 'bi-star'} text-warning fs-1`}
                                            onClick={() => handleStarClick(index)}
                                        ></i>
                                    ))}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="comment" className="form-label">Comment</label>
                                    <textarea className="form-control" id="comment" rows={3} value={comment}
                                              onChange={e => setComment(e.target.value)}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary text-white">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}