import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectAuthenticated = false }) => {
    const token = localStorage.getItem("token");
    if (redirectAuthenticated && token) {
        return <Navigate to="/user" />
    }
    if (!redirectAuthenticated && !token) {
        return <Navigate to="/" />
    }
    return (
        <>{children}</>
    )
}

export default ProtectedRoute