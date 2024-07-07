import Layout from "../components/layout/MainLayout.tsx";
import ServiceCreateModal from "../components/admin/ServiceCreateModal.tsx";
import ReservationTableAdmin from "../components/admin/ReservationTableAdmin.tsx";
import BranchCreateModal from "../components/admin/BranchCreateModal.tsx";
import BranchServicesModal from "../components/admin/BranchServicesModal.tsx";

export default function AdminDashboardPage(): JSX.Element {
    return (
        <Layout>
            <div className="container mt-5">
                <h1 className="text-center text-info">Admin Dashboard</h1>
                <div className="my-4 d-flex justify-content-center">
                    <ServiceCreateModal/>
                    <span className="mx-2"></span>
                    <BranchCreateModal/>
                    <span className="mx-2"></span>
                    <BranchServicesModal/>
                </div>
                <ReservationTableAdmin/>
            </div>
        </Layout>
    );
}
