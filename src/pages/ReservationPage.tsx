import Navbar from "../components/shared/Navbar.tsx";
import Footer from "../components/shared/Footer.tsx";
import ReservationForm from "../components/reservation/ReservationForm.tsx";

export default function ReservationPage() : JSX.Element {
    return (
        <>
            <Navbar />
            <main>
                <h2 className="h1 text-info text-center pt-5">Reservation</h2>
                <ReservationForm />
            </main>
            <Footer/>
        </>
    )
}