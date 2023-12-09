// AuthContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextValue {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    const authContextValue: AuthContextValue = {
        isAuthenticated,
        login,
        logout,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
