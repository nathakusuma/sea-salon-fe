import React, {useState} from "react";
import {CreateBranchRequest} from "../../types/branch.ts";
import {createBranch} from "../../api/services/branch.ts";

export default function BranchCreateModal(): JSX.Element {
    const [branch, setBranch] = useState<CreateBranchRequest>({
        name: "",
        timeZoneOffset: "",
        phone: "",
        timeZoneName: "",
        closeTime: "",
        openTime: "",
        address: "",
        mapsUrl: "",
        imageFile: new File([""], ""),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBranch({ ...branch, [name]: value });
        console.log(branch)
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setBranch({ ...branch, imageFile: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        window.alert("Please wait...")
        try {
            const response = await createBranch(branch);
            window.alert(response.data.message);
            setBranch({
                name: "",
                timeZoneOffset: "",
                phone: "",
                timeZoneName: "",
                closeTime: "",
                openTime: "",
                address: "",
                mapsUrl: "",
                imageFile: new File([""], ""),
            })
            document.getElementById("branchCreateModalClose")?.click();
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message);
            console.error(error);
        }
    };

    return (
        <>
            <button type="button" className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#branchCreateModal">
                Create Branch
            </button>

            <section className="modal fade modal-lg" id="branchCreateModal" tabIndex={-1} aria-labelledby="branchCreateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="branchCreateModalLabel">Create Branch</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={branch.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        value={branch.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mapsUrl" className="form-label">
                                        Maps URL
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mapsUrl"
                                        name="mapsUrl"
                                        value={branch.mapsUrl}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={"6281234567890"}
                                        id="phone"
                                        name="phone"
                                        value={branch.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3 row">
                                    <div className="col">
                                        <label htmlFor="openTime" className="form-label">
                                            Open Time
                                        </label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="openTime"
                                            name="openTime"
                                            value={branch.openTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="closeTime" className="form-label">
                                            Close Time
                                        </label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="closeTime"
                                            name="closeTime"
                                            value={branch.closeTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col">
                                        <label htmlFor="timeZoneName" className="form-label">
                                            Time Zone Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="WIB"
                                            id="timeZoneName"
                                            name="timeZoneName"
                                            value={branch.timeZoneName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="timeZoneOffset" className="form-label">
                                            Time Zone Offset
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="timeZoneOffset"
                                            name="timeZoneOffset"
                                            value={branch.timeZoneOffset}
                                            pattern="^[+-][0-9]{2}:[0-9]{2}$"
                                            placeholder="+07:00"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white mt-2"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" id="branchCreateModalClose"
                                    data-bs-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}