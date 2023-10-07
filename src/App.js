import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import { AuthProvider } from './contexts/AuthProvider';
import Navbar from './components/Navbar';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router >
  )

}

export default App;