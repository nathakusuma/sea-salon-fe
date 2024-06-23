import Navbar from "../components/shared/Navbar.tsx";
import Footer from "../components/shared/Footer.tsx";
import ReviewList from "../components/review/ReviewList.tsx";
import ReviewAddButton from "../components/review/ReviewAddButton.tsx";
import ReviewAddModal from "../components/review/ReviewAddModal.tsx";

export default function ReviewPage() : JSX.Element {
    return (
        <>
            <Navbar />
            <main>
                <h2 className="h1 text-info text-center pt-5">Reviews</h2>
                <ReviewAddButton />
                <ReviewList />
                <ReviewAddModal />
            </main>
            <Footer/>
        </>
    )
}