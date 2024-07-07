import {axiosInstance} from "../coreApi.ts";
import {AxiosResponse} from "axios";
import {CreateBranchRequest, SetServicesToBranchRequest} from "../../types/branch.ts";

const getAllBranches = async () : Promise<AxiosResponse> => {
    return await axiosInstance.get("/branches");
}

const createBranch = async (branch : CreateBranchRequest) : Promise<AxiosResponse> => {
    const formData = new FormData();
    formData.append("image", branch.imageFile);
    formData.append("json", JSON.stringify({
        name: branch.name,
        address: branch.address,
        mapsUrl: branch.mapsUrl,
        phone: branch.phone,
        openTime: branch.openTime,
        closeTime: branch.closeTime,
        timeZoneName: branch.timeZoneName,
        timeZoneOffset: branch.timeZoneOffset,
    }));

    const token = window.localStorage.getItem("token");

    return await axiosInstance.post("/branches", formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

const setServicesToBranch = async (request : SetServicesToBranchRequest) : Promise<AxiosResponse> => {
    const token = window.localStorage.getItem("token");

    return await axiosInstance.put("/branches/services", request, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export { getAllBranches, createBranch, setServicesToBranch };