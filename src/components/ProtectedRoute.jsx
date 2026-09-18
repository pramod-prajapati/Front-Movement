import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../services/api";

function ProtectedRoute() {

    const token = getAuthToken();

    if (!token) {
        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    return <Outlet />;
}

export default ProtectedRoute;