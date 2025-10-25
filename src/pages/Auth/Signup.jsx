import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
    const exists = users.find((u) => u.email === data.email);

    if (exists) {
      toast.error("User already exists!");
      return;
    }

    users.push({
      email: data.email,
      password: data.password,
      name: data.name,
    });

    localStorage.setItem("ticketapp_users", JSON.stringify(users));
    toast.success("Account created successfully! Please log in.");
    navigate("/auth/login");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Create Account
          </h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              placeholder="********"
              className="w-full border rounded-lg p-2 focus:outline-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </main>
      <Footer />
    </div>
  );
}
