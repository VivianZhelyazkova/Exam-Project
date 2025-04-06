import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <>
            <div className="main-container">
                <Header />
                <div className="routes-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
