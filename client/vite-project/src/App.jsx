import { useState } from "react";
import UserProvider from "./providers/UserProvider"
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
    return (
        <UserProvider>
            <div className="main-container">
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
