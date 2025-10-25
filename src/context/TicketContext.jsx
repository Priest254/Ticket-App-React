import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState(() => {
    const savedTickets = localStorage.getItem('ticketapp_tickets');
    return savedTickets ? JSON.parse(savedTickets) : [];
  });
  const [isLoading, setIsLoading] = useState(false);

  // Persist tickets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('ticketapp_tickets', JSON.stringify(tickets));
  }, [tickets]);

  // Validation function
  const validateTicket = (ticket) => {
    const errors = {};
    
    if (!ticket.title?.trim()) {
      errors.title = "Title is required";
    }
    
    if (!ticket.status) {
      errors.status = "Status is required";
    } else if (!["open", "in_progress", "closed"].includes(ticket.status)) {
      errors.status = "Invalid status value";
    }

    if (ticket.description && ticket.description.length > 500) {
      errors.description = "Description must be less than 500 characters";
    }

    return Object.keys(errors).length > 0 ? errors : null;
  };

  // Create ticket
  const createTicket = async (ticketData) => {
    try {
      setIsLoading(true);
      const errors = validateTicket(ticketData);
      
      if (errors) {
        Object.values(errors).forEach(error => toast.error(error));
        return { success: false, errors };
      }

      // In a real app, this would be an API call
      const newTicket = {
        ...ticketData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };

      setTickets(prev => [...prev, newTicket]);
      toast.success("Ticket created successfully!");
      return { success: true, ticket: newTicket };
    } catch (error) {
      toast.error("Failed to create ticket. Please try again.");
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Read tickets
  const getTickets = () => {
    return tickets;
  };

  // Get ticket statistics
  const getTicketStats = () => {
    return {
      total: tickets.length,
      open: tickets.filter(t => t.status === "open").length,
      inProgress: tickets.filter(t => t.status === "in_progress").length,
      closed: tickets.filter(t => t.status === "closed").length,
    };
  };

  // Update ticket
  const updateTicket = async (id, updateData) => {
    try {
      setIsLoading(true);
      const errors = validateTicket({ ...tickets.find(t => t.id === id), ...updateData });
      
      if (errors) {
        Object.values(errors).forEach(error => toast.error(error));
        return { success: false, errors };
      }

      setTickets(prev => 
        prev.map(ticket => 
          ticket.id === id ? { ...ticket, ...updateData, updatedAt: new Date().toISOString() } : ticket
        )
      );
      
      toast.success("Ticket updated successfully!");
      return { success: true };
    } catch (error) {
      toast.error("Failed to update ticket. Please try again.");
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Delete ticket
  const deleteTicket = async (id) => {
    try {
      setIsLoading(true);
      setTickets(prev => prev.filter(ticket => ticket.id !== id));
      toast.success("Ticket deleted successfully!");
      return { success: true };
    } catch (error) {
      toast.error("Failed to delete ticket. Please try again.");
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Get ticket by ID
  const getTicketById = (id) => {
    return tickets.find(ticket => ticket.id === id);
  };

  // Status color mapping
  const statusColors = {
    open: "bg-green-100 text-green-800",
    in_progress: "bg-amber-100 text-amber-800",
    closed: "bg-gray-100 text-gray-800"
  };

  return (
    <TicketContext.Provider 
      value={{
        tickets,
        isLoading,
        createTicket,
        getTickets,
        getTicketById,
        updateTicket,
        deleteTicket,
        getTicketStats,
        statusColors,
        validateTicket
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTickets must be used within a TicketProvider");
  }
  return context;
};