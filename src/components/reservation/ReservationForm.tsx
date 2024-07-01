import { useState, useEffect } from 'react';
import {
    CreateReservationRequest,
    GetAvailableScheduleResponse,
    GetAvailableSchedulesRequest
} from '../../types/reservation.ts';
import { getAvailableSchedules, createReservation } from '../../api/services/reservation.ts';
import {getAllServices} from "../../api/services/service.ts";
import {Service} from "../../types/service.ts";

export default function ReservationForm() : JSX.Element {
    const [availableServices, setAvailableServices] = useState<Service[]>([]);

    const [serviceId, setServiceId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableSchedules, setAvailableSchedules] = useState<GetAvailableScheduleResponse[]>([]);

    const fetchAvailableSchedules = async () => {
        const request: GetAvailableSchedulesRequest = {
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

    const fetchAvailableServices = async () => {
        try {
            const response = await getAllServices();
            setAvailableServices(response.data.payload);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.message);
            console.error(error);
        }

    }

    useEffect(() => {
        fetchAvailableServices();
        if (serviceId && date) {
            fetchAvailableSchedules();
        }
    }, [serviceId, date]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const request: CreateReservationRequest = {
            serviceId: serviceId,
            startTime: time,
            date: date,
        };
        try {
            await createReservation(request);
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

    return (
        <form onSubmit={handleSubmit} className="mb-5 mt-3">
            <div className="mb-3">
                <label className="form-label">Service</label>
                <select required className="form-select" value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
                    <option value="">Select a service</option>
                    {availableServices.map((service, index) => (
                        <option key={index} value={service.id}>{service.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input required type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Start Time</label>
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
            <button type="submit" className="btn btn-primary text-white">Reserve</button>
        </form>
    );
}