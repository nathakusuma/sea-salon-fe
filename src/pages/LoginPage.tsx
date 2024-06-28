import Layout from "../components/layout/MainLayout.tsx";
import LoginForm from "../components/auth/LoginForm.tsx";

export default function LoginPage(): JSX.Element {
    return (
        <Layout>
            <main>
                <LoginForm />
            </main>
        </Layout>
    );
}