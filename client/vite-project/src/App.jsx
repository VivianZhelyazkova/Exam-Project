import { useEffect, useState } from "react";
import UserProvider from "./providers/UserProvider";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import MonsterDetails from "./components/MonsterDetails";
import AddMonster from "./components/AddMonster";
import AuthenticatedGuards from "./routeguards/AuthenticatedGuard";
import AuthenticatedGuard from "./routeguards/AuthenticatedGuard";
import GuestGuard from "./routeguards/GuestGuard";
import NotFound from "./components/NotFound";

function App() {
    return (
        <UserProvider>
            <div className="main-container">
                <Header />
                <div className="routes-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/monsters" element={<Catalog />} />
                        <Route element={<GuestGuard/>}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route >
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/monster/:id"
                            element={<MonsterDetails />}
                        />
                        <Route element={<AuthenticatedGuard />}>
                            <Route
                                path="/addmonster"
                                element={<AddMonster />}
                            />
                        </Route>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </UserProvider>
    );
}

export default App;
