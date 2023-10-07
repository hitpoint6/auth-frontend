import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Dashboard() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/signup");
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <Helmet>
                <title>Dashboard Page</title>
                <meta name="description" content="This is the dashboard page." />
            </Helmet>
            <div>
                <h1 className="header">Dashboard</h1>
                <p className="paragraph">This is the dashboard page</p>
            </div>
        </>
    );
}

export default Dashboard;