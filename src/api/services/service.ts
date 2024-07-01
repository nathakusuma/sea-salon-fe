import {axiosInstance} from "../coreApi.ts";
import {AxiosResponse} from "axios";
import {CreateServiceRequest} from "../../types/service.ts";

const getAllServices = async () : Promise<AxiosResponse> => {
    return await axiosInstance.get("/services");
}

const createService = async (service : CreateServiceRequest) : Promise<AxiosResponse> => {
    const formData = new FormData();
    formData.append("image", service.image);
    formData.append("json", JSON.stringify({
        name: service.name,
        description: service.description,
        price: Number(service.price),
        durationMinute: Number(service.durationMinute),
    }));

    return await axiosInstance.post("/services", formData);
}

export { getAllServices, createService };