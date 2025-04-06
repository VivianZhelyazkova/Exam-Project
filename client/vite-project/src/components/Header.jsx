import { Link } from "react-router";
export default function Header() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            
        </>
    );
}
