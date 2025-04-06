import { NavLink } from "react-router";
export default function Header() {
    return (
        <>
            <NavLink className={({isActive})=>isActive ? "active-link": "link"} to="/">Home</NavLink>
            <NavLink className={({isActive})=>isActive ? "active-link": "link"} to="/catalog">Catalog</NavLink>
            <NavLink className={({isActive})=>isActive ? "active-link": "link"} to="/login">Login</NavLink>
            <NavLink className={({isActive})=>isActive ? "active-link": "link"} to="/register">Register</NavLink>
            
        </>
    );
}
