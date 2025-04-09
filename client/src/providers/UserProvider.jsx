import { UserContext } from "../contexts/UserContext";
import { useEffect, useState } from "react";

export default function UserProvider({ children }) {
    const [authData, setAuthData] = useState({});
     
    useEffect(
        ()=>{
            const data = localStorage.getItem("auth");
            
            if (data){
                setAuthData(JSON.parse(data))
            }
        },[]
    )
    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
        localStorage.setItem("auth", JSON.stringify(resultData));
        
    };

    const userLogoutHandler = () => {
        localStorage.removeItem("auth");
        setAuthData({})
    };

    return (
        <UserContext.Provider
            value={{ ...authData, userLoginHandler, userLogoutHandler }}
        >
            {children}
        </UserContext.Provider>
    );
}
