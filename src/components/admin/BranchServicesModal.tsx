import React, { useEffect, useState } from "react";
import { Branch } from "../../types/branch.ts";
import { Service } from "../../types/service.ts";
import {getAllBranches, setServicesToBranch} from "../../api/services/branch.ts";
import { getAllServices } from "../../api/services/service.ts";

export default function BranchServicesModal(): JSX.Element {
    const [branches, setBranches] = useState<Branch[]>([]);
    const [selectedBranchId, setSelectedBranchId] = useState<string>("");
    const [services, setServices] = useState<Service[]>([]);
    const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);

    useEffect(() => {
        getAllBranches().then((response) => {
            setBranches(response.data.payload);
        });

        getAllServices().then((response) => {
            setServices(response.data.payload);
        });
    }, []);

    const handleBranchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBranchId(event.target.value);
    };

    const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const serviceId = event.target.value;
        if (event.target.checked) {
            setSelectedServiceIds((prev) => [...prev, serviceId]);
        } else {
            setSelectedServiceIds((prev) =>
                prev.filter((id) => id !== serviceId)
            );
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await setServicesToBranch({
                branchId: selectedBranchId,
                serviceIds: selectedServiceIds,
            });
            window.alert(response.data.message)
            document.getElementById("branchServicesModalClose")?.click();
            setSelectedBranchId("");
            setSelectedServiceIds([]);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message)
        }
    };

    return (
        <>
            <button type="button" className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#branchServicesModal">
                Branch Services
            </button>
            <div className="modal fade" id="branchServicesModal" tabIndex={-1}
                 aria-labelledby="branchServicesModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="branchServicesModalLabel">Set Branch Services</h5>
                            <button id="branchServicesModalClose" type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="branchSelect" className="form-label">Select Branch</label>
                                    <select
                                        id="branchSelect"
                                        className="form-select"
                                        value={selectedBranchId}
                                        onChange={handleBranchChange}
                                        required
                                    >
                                        <option value="">Choose a branch...</option>
                                        {branches.map((branch) => (
                                            <option key={branch.id} value={branch.id}>
                                                {branch.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Available Services</label>
                                    <div className="form-check">
                                        {services.map((service) => (
                                            <div key={service.id} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={service.id}
                                                    id={`service-${service.id}`}
                                                    onChange={handleServiceChange}
                                                />
                                                <label className="form-check-label" htmlFor={`service-${service.id}`}>
                                                    {service.name}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary text-white">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
