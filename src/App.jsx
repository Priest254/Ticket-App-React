import { AuthProvider } from "./context/AuthContext";
import { TicketProvider } from "./context/TicketContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <TicketProvider>
        <AppRouter />
        <ToastContainer position="top-center" autoClose={2500} />
      </TicketProvider>
    </AuthProvider>
  );
}

export default App;
