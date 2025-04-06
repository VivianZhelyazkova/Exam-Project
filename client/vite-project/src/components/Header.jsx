import { NavLink } from "react-router";
export default function Header() {
    const navLinks = [
        { path: "/", name: "Home" },
        { path: "/catalog", name: "Catalog" },
        { path: "/aboutus", name: "About us" },
        { path: "/contact", name: "Contact us" },
        { path: "/login", name: "Login" },
        { path: "/register", name: "Register" },
    ];

    return (
        <>
            <div className="header-container">
                <div className="logo">LOGO</div>
                <div className="nav-container">
                    {navLinks.map((item) => (
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active-link" : "link"
                            }
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
}
