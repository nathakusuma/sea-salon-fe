import {axiosInstance} from "../coreApi";
import "../../types/auth.ts"
import {LoginRequest, RegisterRequest} from "../../types/auth.ts";

const handleLogin = async (body : LoginRequest) => {
    return await axiosInstance.post("auth/login", {
        email: body.email,
        password: body.password,
    });
};

const handleRegister = async (body : RegisterRequest) => {
    return await axiosInstance.post("auth/register", body);
};

export {handleLogin, handleRegister};
