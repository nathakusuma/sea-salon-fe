import { useState, useEffect } from 'react';
import {
    CreateReservationRequest,
    GetAvailableScheduleResponse,
    GetAvailableSchedulesRequest
} from '../../types/reservation.ts';
import { getAvailableSchedules, createReservation } from '../../api/services/reservation.ts';
import {Service} from "../../types/service.ts";
import {Branch} from "../../types/branch.ts";
import {getAllBranches} from "../../api/services/branch.ts";

export default function ReservationForm() : JSX.Element {
    const [availableBranches, setAvailableBranches] = useState<Branch[]>([]);
    const [availableServices, setAvailableServices] = useState<Service[]>([]);

    const [branch, setBranch] = useState<Branch>({} as Branch);
    const [serviceId, setServiceId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableSchedules, setAvailableSchedules] = useState<GetAvailableScheduleResponse[]>([]);

    const fetchAvailableSchedules = async () => {
        const request: GetAvailableSchedulesRequest = {
            branchId: branch.id,
            serviceId: serviceId,
            date : date,
        };
        try {
            const response = await getAvailableSchedules(request);
            setAvailableSchedules(response.data.payload);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message);
            console.error(error);
        }
    }

    const fetchBranches = async () => {
        try {
            const response = await getAllBranches();
            setAvailableBranches(response.data.payload);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message);
            console.error(error);
        }
    }

    useEffect(() => {
        fetchBranches();
        if (branch && serviceId && date) {
            fetchAvailableSchedules();
        }
    }, [serviceId, date, branch]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const request: CreateReservationRequest = {
            branchId: branch.id,
            serviceId: serviceId,
            startTime: time,
            date: date,
        };
        try {
            await createReservation(request);
            window.location.reload()
            window.alert("Reservation created successfully!");

            // Reset form fields
            setServiceId('');
            setDate('');
            setTime('');
            setAvailableSchedules([]);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message)
        }
    }

    const handleBranchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const branch = availableBranches.find((b) => b.id === event.target.value);
        if (branch) {
            setBranch(branch)
            setAvailableServices(branch.services);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-5 mt-3">
            <div className="mb-3">
                <label className="form-label">Branch</label>
                <select required className="form-select" value={branch.id}
                        onChange={handleBranchChange}>
                    <option value="">Select a branch</option>
                    {availableBranches.map((b, index) => (
                        <option key={index} value={b.id}>{b.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Service</label>
                <select required className="form-select" value={serviceId}
                        onChange={(e) => setServiceId(e.target.value)} disabled={Object.keys(branch).length === 0}>
                    <option value="">Select a service</option>
                    {availableServices.map((service, index) => (
                        <option key={index} value={service.id}>{service.name}</option>
                    ))}
                </select>
                {Object.keys(branch).length === 0 &&
                    <small className="form-text text-muted">Please select the branch first.</small>}
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input required type="date" className="form-control" value={date}
                       onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="mb-2">
                <label className="form-label">Time</label>
                <select required className="form-select" value={time} onChange={(e) => setTime(e.target.value)}
                        disabled={!date || !serviceId}>
                    <option value="">Select a time</option>
                    {availableSchedules.map((schedule, index) => (
                        <option key={index}
                                value={schedule.startTime}>{schedule.startTime + " - " + schedule.finishTime}</option>
                    ))}
                </select>
                {(!date || !serviceId) &&
                    <small className="form-text text-muted">Please fill in the date and service first.</small>}
            </div>
            <div className="mb-3">Date and time are in the branch's local time zone {branch.timeZoneName ? `(${branch.timeZoneName})` : ''}</div>
            <button type="submit" className="btn btn-primary text-white">Reserve</button>
        </form>
    );
}