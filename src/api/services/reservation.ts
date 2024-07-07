import {axiosInstance} from "../coreApi.ts";
import {
    AdminGetReservationsRequest,
    CreateReservationRequest,
    GetAvailableSchedulesRequest
} from "../../types/reservation.ts";
import {AxiosResponse} from "axios";

const createReservation = async (reservation : CreateReservationRequest) : Promise<AxiosResponse> => {
    const token = window.localStorage.getItem("token");

    return await axiosInstance.post("/reservations", reservation, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const getAvailableSchedules = async (queryParameters : GetAvailableSchedulesRequest) : Promise<AxiosResponse> => {
    const token = window.localStorage.getItem("token");

    return await axiosInstance.get("/reservations/available", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: queryParameters
    });
};

const getReservationsCustomer = async () : Promise<AxiosResponse> => {
    const token = window.localStorage.getItem("token");

    return await axiosInstance.get("/reservations/my", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const getReservationsAdmin = async (queryParameters: AdminGetReservationsRequest) : Promise<AxiosResponse> => {
    const token = window.localStorage.getItem("token");

    return await axiosInstance.get("/reservations/admin", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: queryParameters
    });
}

export { createReservation, getAvailableSchedules, getReservationsCustomer, getReservationsAdmin};
