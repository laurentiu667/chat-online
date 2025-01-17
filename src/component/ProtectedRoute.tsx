import React from "react";
import { Navigate } from "react-router-dom";

// Exemple de type pour les props
interface ProtectedRouteProps {
    isAllowed: boolean; // Indique si l'accès est autorisé
    children: React.ReactNode; // Composants enfants à afficher
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    isAllowed,
    children,
}) => {
    if (!isAllowed) {
        return <Navigate to="/index" replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
