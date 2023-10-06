import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/signup");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>This is the dashboard page</p>
        </div>
    );
}

export default Dashboard;