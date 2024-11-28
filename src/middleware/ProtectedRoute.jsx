/* eslint-disable react/prop-types */
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children, allowedRoles}) => {
    const location = useLocation();
    const token = localStorage.getItem("token");
    
    if(!token) {
        return <Navigate to="/login" state={{from: location}} replace />;
    }
    
    const decoded = jwtDecode(token)
    console.log(decoded);
    
    if(!allowedRoles.includes(decoded.role)) {
        return <Navigate to="/" />;
    }

    return children;
}
