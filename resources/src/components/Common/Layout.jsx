import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="home-page">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
