export interface CreateReservationRequest {
    serviceName: string,
    startTime: string,
    date: string,
}

export interface GetAvailableSchedulesRequest {
    serviceName: string,
    date: string,
}

export interface GetAvailableScheduleResponse {
    startTime: string,
    finishTime: string,
}

export interface GetReservationResponse {
    id: string,
    date: string,
    serviceName: string,
    startTime: string,
    finishTime: string,
}