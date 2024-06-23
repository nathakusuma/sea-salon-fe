import Layout from "../components/layout/MainLayout.tsx";
import Hero from "../components/home/Hero.tsx";
import Services from "../components/home/Services.tsx";
import Contact from "../components/home/Contact.tsx";
import TopReviews from "../components/home/TopReviews.tsx";

export default function HomePage() : JSX.Element {
    return (
        <Layout>
            <main>
                <Hero />
                <Services />
                <TopReviews />
                <Contact />
            </main>
        </Layout>
    )
}