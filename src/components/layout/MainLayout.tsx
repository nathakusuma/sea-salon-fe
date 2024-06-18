import Navbar from "../shared/Navbar.tsx";
import Footer from "../shared/Footer.tsx";
import React from "react";

export default function MainLayout(props: { children: React.ReactNode }): JSX.Element {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}