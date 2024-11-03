import React from "react";
import "../../css/index.css";
import "../../css/auth.css";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";

function HomePage() {
    return (
        <div className="wrapper">
            <Header />
            <div className="home-page"></div>
            <Footer />
        </div>
    );
}

export default HomePage;
