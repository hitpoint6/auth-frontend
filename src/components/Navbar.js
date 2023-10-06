import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { useEffect } from 'react';

function Navbar() {
    const { isAuthenticated, logout } = useAuth();

    useEffect(() => {
        console.log("isAuthenticated:", isAuthenticated);
    }, [isAuthenticated]);

    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex justify-around">
                <li>
                    <Link to="/" className="text-white hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    {isAuthenticated && <Link to="/dashboard" className="text-white hover:underline">
                        Dashboard
                    </Link>}
                </li>
                <li>
                    {!isAuthenticated && <Link to="/signup" className="text-white hover:underline">
                        Signup / Login
                    </Link>}
                </li>
                <li>
                    {isAuthenticated && <button onClick={logout} className="text-white hover:underline">
                        Logout
                    </button>}
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;