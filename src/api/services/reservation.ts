import {axiosInstance} from "../coreApi.ts";
import {CreateReservationRequest, GetAvailableSchedulesRequest} from "../../types/reservation.ts";
import {AxiosResponse} from "axios";

const createReservation = async (reservation : CreateReservationRequest) : Promise<AxiosResponse> => {
    return await axiosInstance.post("/reservations", reservation);
}

const getAvailableSchedules = async (queryParameters : GetAvailableSchedulesRequest) : Promise<AxiosResponse> => {
    return await axiosInstance.get("/reservations/available", {
        params: queryParameters
    });
};

export { createReservation, getAvailableSchedules };