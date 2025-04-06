import { useNavigate } from "react-router";
export default function Register() {
    const navigate = useNavigate()
    async function onSubmit(formData) {
        const { email, password } = Object.fromEntries(formData);
        const response = await fetch("http://localhost:3030/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const result = await response.json();
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/")
    }

    return (
        <>
            <h1>Register</h1>
            <form
                action={onSubmit}
                style={{ display: "flex", flexDirection: "column" }}
            >
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <label htmlFor="rePassword">Repeat Password</label>
                <input type="password" name="rePassword" />
                <input type="submit" value="Register" />
            </form>
        </>
    );
}
