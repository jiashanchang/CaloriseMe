import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
    const [showCloseButton, setShowCloseButton] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (
            location.pathname === "/login" ||
            location.pathname === "/register"
        ) {
            setShowCloseButton(true);
        } else {
            setShowCloseButton(false);
        }
    }, [location.pathname]);

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    const handleTitleClick = () => {
        navigate("/");
    };

    const handleCloseClick = () => {
        navigate("/");
    };

    return (
        <header style={headerStyle}>
            <h1 style={{ cursor: "pointer" }} onClick={handleTitleClick}>
                CaloriseMe
            </h1>
            <div style={buttonContainerStyle}>
                {showCloseButton && (
                    <Button label="X" onClick={handleCloseClick} />
                )}
                {!showCloseButton && (
                    <>
                        <Button label="登入" onClick={handleLoginClick} />
                        <Button label="註冊" onClick={handleRegisterClick} />
                    </>
                )}
            </div>
        </header>
    );
}

const Button = ({ label, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            style={{
                ...buttonStyle,
                ...(isHovered ? hoverStyle : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "rgba(248, 249, 250, 0.9)",
    borderBottom: "1px solid #ccc",
    fontSize: "25px",
    fontWeight: "bold",
};

const buttonContainerStyle = {
    display: "flex",
    gap: "10px",
};

const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    border: "2px solid #00BFFF",
    color: "#00BFFF",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s, box-shadow 0.3s",
};

const hoverStyle = {
    background: "linear-gradient(90deg, #00BFFF, #1E90FF)",
    backgroundColor: "#1E90FF",
    color: "#FFFFFF",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
};

export default Header;
