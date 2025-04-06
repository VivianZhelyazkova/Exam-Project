import { useNavigate } from "react-router";

export default function Login() {
    const navigate = useNavigate()
    async function onSubmit(formData) {
        const { email, password } = Object.fromEntries(formData);
        const data = await fetch("http://localhost:3030/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const result = await data.json();
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/")
    }

    return (
        <>
            <h1>Login</h1>
            <form
                action={onSubmit}
                style={{ display: "flex", flexDirection: "column" }}
            >
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <input type="submit" name="login" value="Login" />
            </form>
        </>
    );
}
