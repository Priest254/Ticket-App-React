# Ticket Management App - React

A modern, responsive ticket management system built with React, featuring a beautiful gradient UI and smooth animations. This application allows users to create, edit, delete, and track support tickets with different statuses.

## 🚀 Features

- **Modern UI/UX**: Beautiful gradient design with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Ticket Management**: Create, edit, delete, and track tickets
- **Status Tracking**: Three ticket statuses - Open, In Progress, and Closed
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation**: Built-in form validation with React Hook Form
- **Toast Notifications**: User-friendly feedback with React Toastify
- **Authentication**: Login and signup functionality
- **Context Management**: Global state management with React Context API

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.1.12
- **Styling**: Tailwind CSS 3.4.13
- **Animations**: Framer Motion 12.23.24
- **Forms**: React Hook Form 7.65.0
- **Routing**: React Router DOM 7.9.4
- **Icons**: Lucide React 0.548.0
- **Notifications**: React Toastify 11.0.5
- **Linting**: ESLint 9.36.0

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ticketapp-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🚀 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.jsx      # Footer component
│   └── Navbar.jsx      # Navigation component
├── context/            # React Context for state management
│   ├── AuthContext.jsx # Authentication context
│   └── TicketContext.jsx # Ticket management context
├── pages/              # Page components
│   ├── Auth/         # Authentication pages
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── Dashboard/    # Dashboard page
│   │   └── Dashboard.jsx
│   ├── Landing/      # Landing page
│   │   └── Landing.jsx
│   └── Tickets/      # Ticket management page
│       └── Tickets.jsx
├── router/            # Routing configuration
│   └── AppRouter.jsx
├── utils/             # Utility functions
├── App.jsx           # Main App component
└── main.jsx         # Application entry point
```

## 🎨 Key Features Explained

### Ticket Management
- **Create Tickets**: Add new tickets with title, description, and status
- **Edit Tickets**: Modify existing tickets inline
- **Delete Tickets**: Remove tickets with confirmation
- **Status Tracking**: Visual status indicators with color coding

### Authentication
- **User Registration**: Create new user accounts
- **User Login**: Secure authentication system
- **Protected Routes**: Route protection based on authentication status

### UI/UX Features
- **Gradient Backgrounds**: Beautiful indigo-purple gradient themes
- **Glassmorphism**: Modern glass-like UI elements
- **Smooth Animations**: Framer Motion powered transitions
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Interactive Elements**: Hover effects and focus states

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### ESLint
Code quality is maintained with ESLint. Configuration is in `eslint.config.js`.

### Vite
Build configuration is handled by Vite in `vite.config.js`.

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist` folder** to your preferred hosting service (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🎯 Future Enhancements

- [ ] User roles and permissions
- [ ] Ticket assignment to team members
- [ ] File attachments for tickets
- [ ] Email notifications
- [ ] Advanced filtering and search
- [ ] Ticket categories and tags
- [ ] Analytics dashboard
- [ ] API integration for backend services

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.js` or kill the process using the port
2. **Build errors**: Ensure all dependencies are installed with `npm install`
3. **Styling issues**: Check if Tailwind CSS is properly configured

### Getting Help

If you encounter any issues, please:
1. Check the console for error messages
2. Ensure all dependencies are up to date
3. Create an issue in the repository with detailed error information

---

**Built with ❤️ using React and modern web technologies**