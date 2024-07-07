export interface CreateReservationRequest {
    branchId: string,
    serviceId: string,
    startTime: string,
    date: string,
}

export interface GetAvailableSchedulesRequest {
    branchId: string,
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
    branchName: string,
    serviceName: string,
    time: string,
}

export interface AdminGetReservationsRequest {
    date: string,
    branchId: string,
}

export interface AdminGetReservationResponse {
    id: string,
    branchName: string,
    serviceName: string,
    time: string,
    customerName: string,
    email: string,
    phoneNumber: string,
}