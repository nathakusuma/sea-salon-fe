import {axiosInstance} from "../coreApi.ts";
import {CreateReviewRequest, GetReviewsRequest} from "../../types/review.ts";
import {AxiosResponse} from "axios";

const createReview = async (review : CreateReviewRequest) : Promise<AxiosResponse> => {
    const token = window.localStorage.getItem("token");
    return await axiosInstance.post("/reviews", review, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const getReviewsLazy = async (queryParameters : GetReviewsRequest) : Promise<AxiosResponse> => {
    return await axiosInstance.get("/reviews", {
        params: queryParameters
    });
};

export { createReview, getReviewsLazy };