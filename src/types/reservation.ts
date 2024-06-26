export interface CreateReservationRequest {
    customerName: string,
    phoneNumber: string,
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