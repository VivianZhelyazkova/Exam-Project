import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useLogin } from "../api/authApi";

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();
    async function onSubmit(formData) {
        const { email, password } = Object.fromEntries(formData);
        const data = await login(email, password);
        userLoginHandler(data);
        navigate("/");
    }

    return (
        <>
            <h1>Login</h1>

            <form action={onSubmit} className={"column form-card"}>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <input className="form-input" type="email" name="email" />
                </div>
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="password">Password</label>
                    </div>
                    <input className="form-input" type="password" name="password" />
                </div>
                <button className="form-button" type="submit" name="login">
                    Login
                </button>
            </form>
        </>
    );
}
