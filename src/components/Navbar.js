import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { useEffect } from 'react';

function Navbar() {
    const { isAuthenticated, logout } = useAuth();

    useEffect(() => {
        console.log("isAuthenticated:", isAuthenticated);
    }, [isAuthenticated]);

    return (
        <nav className="bg-black text-white w-full">
            <div className='max-w-7xl mx-auto p-7'>
                <ul className="flex justify-between">
                    <li>
                        <Link to="/" className="text-white hover:underline">
                            Home
                        </Link>
                    </li>
                    <div className='flex space-x-4'>
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
                    </div>



                </ul>
            </div>

        </nav>
    );
}

export default Navbar;