export default function ReviewAddButton() : JSX.Element {
    return (
        <div className="d-flex justify-content-center pt-3 pb-5">
            <button className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#reviewAddModal">
                Add Your Review
            </button>
        </div>
    )
}