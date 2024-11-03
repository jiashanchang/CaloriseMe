import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setIsLogin = () => {} }) {
    const navigate = useNavigate();
    const handelRegister = () => {
        setIsLogin(false);
        navigate("/register");
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
                    autoComplete="current-password"
                    required
                />
            </div>

            <button className="auth-blue-button">登入</button>
            <div className="account">
                沒有帳號？
                <button className="auth-orange-button" onClick={handelRegister}>
                    前往註冊
                </button>
            </div>
        </div>
    );
}

export default LoginForm;
