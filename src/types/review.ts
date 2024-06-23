export interface Review {
    id: string,
    customerName: string,
    starRating: number,
    comment: string,
    createdAt: string,
}

export interface GetReviewsRequest {
    limit: number,
    action: string,
    idPivot: string,
}

export interface CreateReviewRequest {
    customerName: string,
    starRating: number,
    comment: string,
}