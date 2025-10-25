import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-indigo-700 via-purple-700 to-indigo-900 text-white">
      <Navbar />

      <main className="relative flex-grow flex flex-col items-center justify-center text-center px-4">
        {/* Decorative Circles */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-300/10 rounded-full blur-3xl"></div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Manage Your Tickets Effortlessly
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            A futuristic platform to track, resolve, and simplify issues — all in one beautiful dashboard.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/auth/login"
              className="bg-white text-indigo-700 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl focus:ring-2 focus:ring-white transition"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl focus:ring-2 focus:ring-white transition"
            >
              Get Started
            </Link>
          </div>
        </motion.section>

        {/* Wavy Background */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L60,272C120,256,240,224,360,213.3C480,203,600,213,720,218.7C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96V320H0Z"
          />
        </svg>
      </main>

      <Footer />
    </div>
  );
}
