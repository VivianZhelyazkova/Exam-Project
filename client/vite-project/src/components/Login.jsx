import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useLogin } from "../api/authApi";

import ErrorModal from "./ErrorModal";

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();
    const [errorMessage,setErrorMessage] = useState("")

    async function onSubmit(formData) {
        const { email, password } = Object.fromEntries(formData);
        try {
            const data = await login(email, password);
            userLoginHandler(data);
            navigate("/");
        } catch (err) {
            setErrorMessage(err.message)
        }
    }

    return (
        <>
            {errorMessage && <ErrorModal message={errorMessage} onClose={()=>{setErrorMessage("")}}/>}
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
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                    />
                </div>
                <button className="form-button" type="submit" name="login">
                    Login
                </button>
            </form>
        </>
    );
}
