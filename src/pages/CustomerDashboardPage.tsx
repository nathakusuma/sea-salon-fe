import Layout from "../components/layout/MainLayout.tsx";
import ReservationForm from "../components/reservation/ReservationForm.tsx";
import ReservationTable from "../components/reservation/ReservationTable.tsx";

export default function CustomerDashboardPage(): JSX.Element {
    return (
        <Layout>
            <main>
                <h1 className="h1 text-info text-center m-5">Customer Dashboard</h1>
                <div className="container mt-5">
                    <div className="row">
                        <section className="col-md-6">
                            <h2>Make a Reservation</h2>
                            <ReservationForm />
                        </section>
                        <section className="col-md-6">
                            <h2>Past Reservations</h2>
                            <ReservationTable />
                        </section>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
