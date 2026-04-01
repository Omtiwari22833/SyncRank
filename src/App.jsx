import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Leaderboard from './pages/Leaderboard';
import Feed from './pages/Feed';
import Coach from './pages/Coach';
import About from './pages/About';
import Contact from './pages/Contact';

/**
 * ProtectedRoute: A powerful pattern for ensuring only logged-in users 
 * can see certain pages.
 */
function ProtectedRoute({ children }) {
  const { user } = useUser();
  if (!user) return <Navigate to="/landing" replace />;
  return <>{children}</>;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* These routes require the user to be logged in */}
          <Route path="/leaderboard" element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          } />
          <Route path="/feed" element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          } />
          <Route path="/coach" element={
            <ProtectedRoute>
              <Coach />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}

