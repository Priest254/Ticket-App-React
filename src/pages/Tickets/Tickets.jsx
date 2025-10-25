import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Plus, Edit3, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTickets } from "../../context/TicketContext";

export default function Tickets() {
  const { register, handleSubmit, reset } = useForm();
  const { createTicket, updateTicket, deleteTicket, getTickets } = useTickets();
  const [editId, setEditId] = useState(null);
  const tickets = getTickets();

  const onSubmit = async (data) => {
    if (editId) {
      const result = await updateTicket(editId, data);
      if (result.success) {
        setEditId(null);
      }
    } else {
      const result = await createTicket(data);
      if (result.success) {
        reset();
      }
    }
  };

  const handleEdit = (t) => {
    setEditId(t.id);
    reset(t);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this ticket?")) return;
    await deleteTicket(id);
  };

  const badgeColor = (s) =>
    ({
      open: "bg-green-400/20 text-green-300 border-green-300/30",
      in_progress: "bg-amber-400/20 text-amber-300 border-amber-300/30",
      closed: "bg-gray-400/20 text-gray-300 border-gray-300/30",
    }[s]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-700 via-purple-700 to-indigo-900 text-white overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>

      <main className="flex-grow py-16 px-6 max-w-[1440px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Ticket Management
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* form */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Plus size={22} /> {editId ? "Edit Ticket" : "Create Ticket"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm mb-1">Title *</label>
                <input
                  {...register("title")}
                  className="w-full p-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Description</label>
                <textarea
                  {...register("description")}
                  className="w-full p-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Status *</label>
                <select
                  {...register("status")}
                  className="w-full p-3 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="open">Open</option>
                  <option value="in_progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                >
                  {editId ? "Update" : "Add Ticket"}
                </button>
                {editId && (
                  <button
                    onClick={() => {
                      setEditId(null);
                      reset();
                    }}
                    type="button"
                    className="bg-gray-500 text-white px-6 py-2 rounded-xl hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </motion.section>

          {/* list */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tickets.length === 0 ? (
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center">
                <p className="text-white/70">No tickets yet. Create one!</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {tickets.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-md hover:bg-white/20 transition backdrop-blur-xl"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{t.title}</h3>
                      <span
                        className={`px-3 py-1 text-xs border rounded-full ${badgeColor(
                          t.status
                        )}`}
                      >
                        {t.status.replace("_", " ")}
                      </span>
                    </div>
                    {t.description && (
                      <p className="text-sm text-white/80 mb-3">
                        {t.description}
                      </p>
                    )}
                    <div className="flex justify-between text-sm text-white/60">
                      <span>{t.createdAt}</span>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(t)}
                          className="hover:text-blue-300 transition"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(t.id)}
                          className="hover:text-red-400 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
