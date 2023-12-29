// PrivateRoutes are only accessible for the user who is already logged in

import { Route, Navigate } from "react-router-dom";
import React from "react";

function Private({ children }) {
    const status = sessionStorage.getItem("login_status")

    if (!status) {
        return <Navigate to="/login" />
    }
    return children;
}

export default Private;
