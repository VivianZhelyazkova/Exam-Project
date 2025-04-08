import { NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import logo from "../assets/logo.png";

export default function Header() {
    const { email, isAuthenticated } = useAuth();
    const { userLogoutHandler } = useContext(UserContext);

    function isActiveClassName({ isActive }) {
        return isActive ? "active-link" : "link";
    }

    return (
        <>
            <div className="header-container">
                <img className="logo" src={logo}></img>
                <div className="nav-container">
                    <NavLink className={isActiveClassName} to="/">
                        Home
                    </NavLink>
                    <NavLink className={isActiveClassName} to="/monsters">
                        Monsters
                    </NavLink>
                    <NavLink className={isActiveClassName} to="/aboutus">
                        About Us
                    </NavLink>
                    <NavLink className={isActiveClassName} to="/contact">
                        Contact
                    </NavLink>
                    {isAuthenticated ? (
                        <>
                            <NavLink className={isActiveClassName}>
                                {email}
                            </NavLink>
                            <NavLink onClick={userLogoutHandler}>
                                {" "}
                                Logout{" "}
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink className={isActiveClassName} to="/login">
                                Login
                            </NavLink>
                            <NavLink
                                className={isActiveClassName}
                                to="/register"
                            >
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
                {isAuthenticated && <button className="button add-monster-button">Add Monster</button>}
            </div>
        </>
    );
}
