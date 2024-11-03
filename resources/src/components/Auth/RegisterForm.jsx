import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm({ setIsLogin = () => {} }) {
    const navigate = useNavigate();
    const handleLoginRedirect = () => {
        setIsLogin(true);
        navigate("/login");
    };

    return (
        <div className="auth-container">
            <div className="input-group">
                <label htmlFor="email">信箱</label>
                <input
                    type="email"
                    id="email"
                    placeholder="請輸入信箱"
                    autoComplete="email"
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">密碼</label>
                <input
                    type="password"
                    id="password"
                    placeholder="請輸入密碼"
                    autoComplete="new-password"
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">確認密碼</label>
                <input
                    type="password"
                    id="confirm-password"
                    placeholder="請確認密碼"
                    autoComplete="new-password"
                    required
                />
            </div>

            <button className="auth-blue-button">註冊</button>

            <div className="account">
                已有帳號？
                <button
                    className="auth-orange-button"
                    onClick={handleLoginRedirect}
                >
                    前往登入
                </button>
            </div>
        </div>
    );
}

export default RegisterForm;
