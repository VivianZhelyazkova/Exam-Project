import { useEffect, useState } from "react";
import UserProvider from "./providers/UserProvider"
import "./App.css";
import Header from "./components/Header";
import { Routes, Route,useLocation } from "react-router";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import amulet from "./assets/homeBackground.png"


function App() {
    const location = useLocation()
    const [backgroundClassName, setbackgroundClassName] = useState({})
    useEffect(()=>{
        if (location.pathname === "/"){
            setbackgroundClassName(
                {backgroundImage:`url(${amulet})`,
                
            })
        }else{
            setbackgroundClassName({})
        }
    },[location.pathname])
    
    return (
        <UserProvider>
            <div className="main-container" style={backgroundClassName} >
                <Header />
                <div className="routes-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/aboutus" element={<AboutUs/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </div>
            </div>
            </UserProvider>
    );
}

export default App;
