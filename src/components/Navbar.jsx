import { NavLink, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { LayoutDashboard, Trophy, Activity, Sparkles, Info, Mail, LogOut } from 'lucide-react';

/**
 * Navbar: The main navigation header.
 * Uses NavLink to automatically highlight the active page.
 */

export default function Navbar() {
  const { user, logout } = useUser();

  const navItems = [
    { name: 'Home', path: '/', icon: LayoutDashboard },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Activity', path: '/feed', icon: Activity },
    { name: 'AI Coach', path: '/coach', icon: Sparkles },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-white">SyncRank</span>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                  isActive ? 'text-blue-500' : 'text-gray-400'
                }`
              }
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-xs font-medium text-white">{user.username}</p>
                <p className="text-[10px] text-gray-400">{user.college}</p>
              </div>
              <button
                onClick={logout}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-red-500/20 hover:text-red-400"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/landing"
              className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              Join Now
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
