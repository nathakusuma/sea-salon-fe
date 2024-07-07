import {Service} from "./service.ts";

export interface Branch {
    id: string;
    name: string;
    address: string;
    mapsUrl: string;
    phone: string;
    openTime: string;
    closeTime: string;
    timeZoneName: string;
    services: Service[];
    imageUrl: string;
}

export interface CreateBranchRequest {
    name: string;
    address: string;
    mapsUrl: string;
    phone: string;
    openTime: string;
    closeTime: string;
    timeZoneName: string;
    timeZoneOffset: string;
    imageFile: File;
}

export interface SetServicesToBranchRequest {
    serviceIds: string[];
    branchId: string;
}
