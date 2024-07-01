export interface RegisterRequest {
    fullName: string
    email: string
    phoneNumber: string
    password: string
}

export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    fullName: string
    isAdmin: string
}