import { Navigate, Outlet, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

export default function AuthenticatedGuard() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}
