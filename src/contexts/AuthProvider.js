import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function checkAuthStatus() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/auth/status`, { withCredentials: true });
            setIsAuthenticated(response.data.isAuthenticated);
        } catch (error) {
            console.error("Error checking authentication status:", error);
        }
    }

    useEffect(() => {
        checkAuthStatus();
    }, []);

    async function logout() {
        try {
            // If you're using tokens, clear them
            await fetch(`${process.env.REACT_APP_SERVER_URL}/api/logout`, { method: 'POST', credentials: 'include' });
            setIsAuthenticated(false);
        } catch (error) {
            console.error("Error logging out", error);

        }
    }

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        logout
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
