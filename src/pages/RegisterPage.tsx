import Layout from "../components/layout/MainLayout";
import RegisterForm from "../components/auth/RegisterForm.tsx";

export default function RegisterPage(): JSX.Element {
    return (
        <Layout>
            <main>
                <RegisterForm />
            </main>
        </Layout>
    );
}
