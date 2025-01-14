import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Définir le type du contexte
interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    username: string;
    setUsernameAuth: (value: string) => void;
}

// Créer le contexte avec un type par défaut
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook pour accéder au contexte
export const useAuthentification = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth doit être utilisé dans un AuthProvider");
    }
    return context;
};

// Fournisseur du contexte
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const [username, setUsernameAuth] = useState("");

    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());
    }, [isLoggedIn]);

    

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsernameAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
