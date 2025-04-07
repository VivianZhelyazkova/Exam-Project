import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useLogin } from "../api/authApi";

export default function Login() {
    const navigate = useNavigate();
    const {userLoginHandler} = useContext(UserContext)
    const {login} = useLogin()
    async function onSubmit(formData) {
        const { email, password } = Object.fromEntries(formData);
        const data = await login(email, password)  
        userLoginHandler(data)
        navigate("/");
    }

    return (
        <>
            <h1>Login</h1>
            <form action={onSubmit} className="column">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <input type="submit" name="login" value="Login" />
            </form>
        </>
    );
}
