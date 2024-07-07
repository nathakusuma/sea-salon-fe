import React, {useState} from "react";
import {CreateServiceRequest} from "../../types/service.ts";
import {createService} from "../../api/services/service.ts";

export default function ServiceCreateModal(): JSX.Element {
    const [service, setService] = useState<CreateServiceRequest>({
        name: '',
        description: '',
        price: 0,
        durationMinute: 0,
        image: null as unknown as File,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setService({ ...service, image: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await createService(service);
            window.alert(response.data.message);
            document.getElementById("serviceModalClose")?.click();
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message);
            console.error(error);
        }
    };

    return (
        <>
            <button type="button" className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#serviceModal">
                Create Service
            </button>

            <section className="modal fade modal-lg" id="serviceModal" tabIndex={-1} aria-labelledby="serviceModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="serviceModalLabel">Create Service</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={service.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        rows={3}
                                        value={service.description}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        value={service.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="durationMinute" className="form-label">Duration (minutes)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="durationMinute"
                                        name="durationMinute"
                                        value={service.durationMinute}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary text-white mt-2">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" id="serviceModalClose"
                                    data-bs-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}