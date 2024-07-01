export interface Service {
    id: string,
    name: string,
    description: string,
    price: number,
    durationMinute: number,
    imageUrl: string,
}

export interface CreateServiceRequest {
    name: string,
    description: string,
    price: number,
    durationMinute: number,
    image: File,
}