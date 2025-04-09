import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useRegister } from "../api/authApi";

import ErrorModal from "./ErrorModal";

export default function Register() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { register } = useRegister();
    const [errorMessage, setErrorMessage] = useState("");

    async function onSubmit(formData) {
        const { email, password, rePassword, name } =
            Object.fromEntries(formData);
        try {
            if (password !== rePassword) {
                setErrorMessage("Passwords don't match!");
                return
            }
            const data = await register(email, password, name);
            userLoginHandler(data);
            navigate("/");
        } catch (err) {
            setErrorMessage(err.message);
        }
    }

    return (
        <>
            {errorMessage && (
                <ErrorModal
                    message={errorMessage}
                    onClose={() => {
                        setErrorMessage("");
                    }}
                />
            )}
            <h1>Register</h1>
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
                <div className="form-row-container">
                    <div className="form-row-left-container">
                        <div className="form-heading-line"></div>
                        <label htmlFor="rePassword">Re-Password</label>
                    </div>
                    <input
                        className="form-input"
                        type="password"
                        name="rePassword"
                    />
                </div>

                <button className="form-button" type="submit" name="register">
                    Register
                </button>
            </form>
        </>
    );
}
