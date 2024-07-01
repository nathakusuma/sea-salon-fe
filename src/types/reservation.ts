export interface CreateReservationRequest {
    serviceId: string,
    startTime: string,
    date: string,
}

export interface GetAvailableSchedulesRequest {
    serviceId: string,
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

export interface AdminGetReservationResponse {
    id: string,
    serviceName: string,
    startTime: string,
    finishTime: string,
    customerName: string,
    email: string,
    phoneNumber: string,
}