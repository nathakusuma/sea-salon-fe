import {useState} from "react";
import {createReview} from "../../api/services/reviews.ts";

export default function ReviewAddModal() : JSX.Element {
    const [starRating, setStarRating] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [comment, setComment] = useState<string>("");

    const handleStarClick = (index: number) => {
        setStarRating(index + 1);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await createReview({customerName: name, starRating: starRating, comment: comment});
        setStarRating(0);
        setName("");
        setComment("");
        alert("Review submitted successfully. Please refresh the page to see your review.");
    };

    return (
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
                                <label htmlFor="name" className="form-label">Name</label>
                                <input id="name" className="form-control" type="text" value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="comment" className="form-label">Comment</label>
                                <textarea className="form-control" id="comment" rows={3} value={comment} onChange={e => setComment(e.target.value)}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary text-white">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}