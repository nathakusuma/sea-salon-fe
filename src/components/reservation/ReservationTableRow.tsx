import {GetReservationResponse} from "../../types/reservation.ts";

export default function ReservationTableRow(props: { reservation: GetReservationResponse }) : JSX.Element {
    return (
        <tr id={props.reservation.id}>
            <td>{props.reservation.date}</td>
            <td>{props.reservation.serviceName}</td>
            <td>{props.reservation.startTime}</td>
            <td>{props.reservation.finishTime}</td>
        </tr>
    )
}