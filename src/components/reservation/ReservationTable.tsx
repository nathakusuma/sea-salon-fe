import {GetReservationResponse} from "../../types/reservation.ts";
import {useEffect, useState} from "react";
import {getReservationsCustomer} from "../../api/services/reservation.ts";
import ReservationTableRow from "./ReservationTableRow.tsx";

export default function ReservationTable() : JSX.Element {
    const [reservations, setReservations] = useState<GetReservationResponse[]>([])

    const getPastReservations = async () => {
        try {
            const response = await getReservationsCustomer();
            console.log(response.data.payload)
            setReservations(response.data.payload);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPastReservations();
    }, []);

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Date</th>
                <th>Branch</th>
                <th>Service</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            {reservations.length > 0 ? (
                reservations.map((reservation : GetReservationResponse) => (
                    <ReservationTableRow key={reservation.id} reservation={reservation} />
                ))
            ) : (
                <tr>
                    <td colSpan={4}>No reservations yet</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}