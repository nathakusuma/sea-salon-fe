import { useState, useEffect } from 'react';
import {
    CreateReservationRequest,
    GetAvailableScheduleResponse,
    GetAvailableSchedulesRequest
} from '../../types/reservation.ts';
import { getAvailableSchedules, createReservation } from '../../api/services/reservation.ts';

export default function ReservationForm() : JSX.Element {
    const [serviceName, setServiceName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableSchedules, setAvailableSchedules] = useState<GetAvailableScheduleResponse[]>([]);

    const fetchAvailableSchedules = async () => {
        const request: GetAvailableSchedulesRequest = {
            serviceName,
            date,
        };
        try {
            const response = await getAvailableSchedules(request);
            setAvailableSchedules(response.data.payload);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (serviceName && date) {
            fetchAvailableSchedules();
        }
    }, [serviceName, date]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const request: CreateReservationRequest = {
            serviceName: serviceName,
            startTime: time,
            date: date,
        };
        try {
            await createReservation(request);
            window.alert("Reservation created successfully!");

            // Reset form fields
            setServiceName('');
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
                <select className="form-select" value={serviceName} onChange={(e) => setServiceName(e.target.value)}>
                    <option value="">Select a service</option>
                    <option value="Haircuts and Styling">Haircuts and Styling</option>
                    <option value="Manicure and Pedicure">Manicure and Pedicure</option>
                    <option value="Facial Treatments">Facial Treatments</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Start Time</label>
                <select className="form-select" value={time} onChange={(e) => setTime(e.target.value)}
                        disabled={!date || !serviceName}>
                    <option value="">Select a time</option>
                    {availableSchedules.map((schedule, index) => (
                        <option key={index}
                                value={schedule.startTime}>{schedule.startTime + " - " + schedule.finishTime}</option>
                    ))}
                </select>
                {(!date || !serviceName) &&
                    <small className="form-text text-muted">Please fill in the date and service first.</small>}
            </div>
            <button type="submit" className="btn btn-primary text-white">Reserve</button>
        </form>
    );
}