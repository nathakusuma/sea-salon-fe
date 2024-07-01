import CustomerDashboardPage from "../../pages/CustomerDashboardPage";
import AdminDashboardPage from "../../pages/AdminDashboardPage.tsx";

const DashboardRoute = () => {
    const isAdmin = window.localStorage.getItem("isAdmin") === 'true';

    return isAdmin ? <AdminDashboardPage /> : <CustomerDashboardPage />;
};

export default DashboardRoute;