import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useRegister } from "../api/authApi";
export default function Register() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { register } = useRegister();
    async function onSubmit(formData) {
        const { email, password, name } = Object.fromEntries(formData);
        const data = await register(email, password, name);
        userLoginHandler(data);
        navigate("/");
    }

    return (
        <>
            <h1>Register</h1>
            <form action={onSubmit} className={"column form-card"}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <label htmlFor="rePassword">Repeat Password</label>
                <input type="password" name="rePassword" />
                <input type="submit" value="Register" />
            </form>
        </>
    );
}
