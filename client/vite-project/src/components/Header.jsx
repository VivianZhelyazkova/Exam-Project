import { NavLink, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import logo from "../assets/logo.png";

export default function Header() {
    const { name, isAuthenticated } = useAuth();
    const { userLogoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    function isActiveClassName({ isActive }) {
        return isActive ? "active-link" : "link";
    }

    function addMonsterClickHandler() {
        navigate("/addmonster");
    }
    return (
        <>
            <div className="header-container">
                <img className="logo" onClick={()=>{navigate("/");}} src={logo}></img>
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
                {isAuthenticated && (
                    <button
                        onClick={addMonsterClickHandler}
                        className="button add-monster-button"
                    >
                        Add Monster
                    </button>
                )}
            </div>
        </>
    );
}
