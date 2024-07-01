import { useState, useEffect } from "react";
import { AdminGetReservationResponse } from "../../types/reservation.ts";
import {getReservationsAdmin} from "../../api/services/reservation.ts"

export default function ReservationTableAdmin(): JSX.Element {
    const [date, setDate] = useState<string>("");
    const [reservations, setReservations] = useState<AdminGetReservationResponse[]>([]);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await fetchReservations();
    };

    const fetchReservations = async () => {
        try {
            const response = await getReservationsAdmin(date);
            setReservations(response.data.payload);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.alert(error.response.data.payload)
            console.error(error);
        }
    };

    useEffect(() => {
        // Set the initial date to the current date in 'YYYY-MM-DD' format in the browser's local time zone
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setDate(formattedDate);
    }, []);

    useEffect(() => {
        if (date) {
            fetchReservations();
        }
    }, [date]);

    return (
        <section className="mt-5">
            <h2>Find Reservation</h2>
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="date" className="sr-only">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={handleDateChange}
                        placeholder="Select date"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-2 text-white">Search</button>
            </form>
            <div className="mt-3">
                <h3>Reservation Results</h3>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Service</th>
                        <th>Start</th>
                        <th>Finish</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reservations.length > 0 ? reservations.map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{reservation.id}</td>
                            <td>{reservation.customerName}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.phoneNumber}</td>
                            <td>{reservation.serviceName}</td>
                            <td>{reservation.startTime}</td>
                            <td>{reservation.finishTime}</td>
                        </tr>
                    )) : (
                        <tr><td colSpan={7}>No reservation recorded on that date</td></tr>
                    )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
