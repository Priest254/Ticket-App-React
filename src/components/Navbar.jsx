import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { session, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (session) navigate("/dashboard");
    else navigate("/auth/signup");
  };

  const menuItems = session
    ? [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Tickets", to: "/tickets" },
      ]
    : [
        { label: "Login", to: "/auth/login" },
        { label: "Get Started", to: "/auth/signup" },
      ];

  return (
    <nav className="relative z-50 bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-4">
        <button
          onClick={handleLogoClick}
          className="text-2xl font-extrabold tracking-wide focus:outline-none focus:ring-2 focus:ring-white"
        >
          TicketApp
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-blue-200 focus:ring-2 focus:ring-white rounded px-2"
            >
              {item.label}
            </Link>
          ))}
          {session && (
            <button
              onClick={logout}
              className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-lg transition focus:ring-2 focus:ring-white"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:ring-2 focus:ring-white rounded"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden flex flex-col bg-indigo-800/90 backdrop-blur-sm text-white px-4 pb-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="py-2 hover:text-blue-200 focus:ring-2 focus:ring-white rounded"
            >
              {item.label}
            </Link>
          ))}
          {session && (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="py-2 text-left hover:text-blue-200 focus:ring-2 focus:ring-white rounded"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
