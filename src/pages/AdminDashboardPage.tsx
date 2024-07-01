import Layout from "../components/layout/MainLayout.tsx";
import ServiceCreateModal from "../components/admin/ServiceCreateModal.tsx";

export default function AdminDashboardPage(): JSX.Element {
    return (
        <Layout>
            <div className="container mt-5">
                <h1 className="text-center text-info">Admin Dashboard</h1>
                <div className="my-4 d-flex justify-content-center">
                    <ServiceCreateModal/>
                </div>
            </div>
        </Layout>
    );
}
