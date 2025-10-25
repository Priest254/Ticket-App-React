import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTickets } from "../../context/TicketContext";

export default function Dashboard() {
  const { logout } = useAuth();
  const { getTicketStats } = useTickets();
  const stats = getTicketStats();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-700 via-purple-700 to-indigo-900 text-white overflow-hidden">
      <Navbar />

      {/* glowing accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>

      <main className="relative flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        {/* Top wave */}
        <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="#4f46e5"
            fillOpacity="0.4"
            d="M0,64L40,80C80,96,160,128,240,144C320,160,400,160,480,170.7C560,181,640,203,720,192C800,181,880,139,960,138.7C1040,139,1120,181,1200,213.3C1280,245,1360,267,1400,277.3L1440,288V0H0Z"
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[1440px] mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Dashboard Overview</h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Tickets", value: stats.total },
              { label: "Open", value: stats.open, color: "text-green-300" },
              { label: "In Progress", value: stats.inProgress, color: "text-amber-300" },
              { label: "Closed", value: stats.closed, color: "text-gray-300" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-xl hover:bg-white/20 transition"
              >
                <h3 className="text-sm uppercase tracking-wide text-white/70">{s.label}</h3>
                <p className={`text-4xl font-bold ${s.color || "text-white"}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-16 flex-wrap">
            <Link
              to="/tickets"
              className="bg-white text-indigo-700 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl focus:ring-2 focus:ring-white transition"
            >
              Manage Tickets
            </Link>
            <button
              onClick={logout}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl shadow-lg focus:ring-2 focus:ring-white transition"
            >
              Logout
            </button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
