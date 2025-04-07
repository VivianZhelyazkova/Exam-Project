import { UserContext } from "../contexts/UserContext";

export default function UserProvider({ children }) {
    const authData = localStorage.getItem("auth");
    const userLoginHandler = (resultData) => {
        localStorage.setItem("auth", JSON.stringify(resultData));
    };

    const userLogoutHandler = () => {
        localStorage.removeItem("auth");
    };

    return (
        <UserContext.Provider
            value={{ ...authData, userLoginHandler, userLogoutHandler }}
        >
            {children}
        </UserContext.Provider>
    );
}
