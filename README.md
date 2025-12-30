# 🚀 Futuristic User Management Dashboard

A modern, sleek, and futuristic admin dashboard built with React, TypeScript, and Material-UI. This application provides comprehensive user management capabilities with a stunning UI featuring glassmorphism effects, neon accents, and smooth animations.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript)
![MUI](https://img.shields.io/badge/MUI-7.3.6-007FFF?style=flat-square&logo=mui)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)

## ✨ Features

### Core Functionality
- 📋 **User List Management** - View all users in a responsive, sortable table
- 🔍 **Advanced Search** - Real-time search with 300ms debouncing for optimal performance
- 🎯 **Smart Filters** - Filter users by role (Admin/Manager/User) and status (Active/Inactive)
- 📄 **Pagination** - Client-side pagination with customizable rows per page (5, 10, 25, 50)
- 🔄 **Sortable Columns** - Click column headers to sort by name, email, role, or status
- ➕ **Create Users** - Add new users with comprehensive form validation
- ✏️ **Edit Users** - Update existing user information seamlessly
- 🗑️ **Delete Users** - Remove users with confirmation dialog for safety
- 👁️ **User Details** - Dedicated page to view complete user information

### User Experience
- 🌙 **Dark Mode Theme** - Unique electric purple (#a855f7) and vibrant orange (#fb923c) accents
- 🎨 **Glassmorphism Design** - Modern frosted glass effect with backdrop blur
- 🎭 **Smooth Animations** - Hover effects and transitions throughout
- 📱 **Fully Responsive** - Works beautifully on desktop, tablet, and mobile devices
- ♿ **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML
- 🔔 **Toast Notifications** - User-friendly success/error messages
- ⚡ **Loading States** - Visual feedback during data operations
- 🚨 **Error Handling** - Graceful error messages and recovery
- 🎯 **Centered Layout** - Professional centered design for better UX

### Technical Highlights
- 🏗️ **Clean Architecture** - Well-organized folder structure with separation of concerns
- 🎣 **Custom Hooks** - `useUsers`, `useUser`, `useUserMutations` for data management
- 🔌 **Service Layer** - Abstracted API calls in `userService.ts`
- 📝 **TypeScript** - Fully typed for enhanced developer experience and safety
- 🎨 **Custom MUI Theme** - Unique futuristic design system
- 🔄 **React Router** - Client-side routing for seamless navigation

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── UserTable/      # Data table with filters, search, pagination
│   ├── UserForm/       # Add/Edit user form with validation
│   ├── ConfirmDialog/  # Confirmation dialog for destructive actions
│   └── NotificationProvider/  # Toast notification system
│
├── pages/              # Page components
│   └── Users/
│       ├── UsersList.tsx     # Main user list page
│       └── UserDetails.tsx   # Individual user detail page
│
├── services/           # API service layer
│   └── userService.ts  # All user-related API calls
│
├── hooks/              # Custom React hooks
│   └── useUsers.ts     # Data fetching and mutation hooks
│
├── types/              # TypeScript type definitions
│   └── user.ts         # User-related types and interfaces
│
├── theme/              # MUI theme configuration
│   └── theme.ts        # Custom futuristic dark theme
│
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety and better DX
- **Vite 7.2.4** - Lightning-fast build tool
- **Material-UI (MUI) 7.3.6** - Component library
- **Emotion** - CSS-in-JS styling
- **React Router 7.11.0** - Client-side routing

### Backend/API
- **JSON Server 1.0.0-beta.3** - Mock REST API

### Development
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm 9+

### Steps

1. **Clone the repository** (or use the existing project)
   ```bash
   cd n:\practice\user-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (Mock API)
   ```bash
   npm run server
   ```
   The API will run on `http://localhost:3001`

4. **Start the development server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run server` - Start JSON Server (mock API)
- `npm run dev:all` - Start both dev server and JSON Server concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📊 API Endpoints

The mock API provides the following endpoints:

```
GET    /users           # Get all users
GET    /users/:id       # Get user by ID
POST   /users           # Create new user
PUT    /users/:id       # Update user
DELETE /users/:id       # Delete user
```

### Query Parameters
- `_page` - Page number for pagination
- `_limit` - Items per page
- `q` - Search query
- `role` - Filter by role
- `status` - Filter by status
- `_sort` - Sort field
- `_order` - Sort order (asc/desc)

## 🎨 Design Decisions

### 1. **Unique Futuristic Theme**
- Dark background (#0f0f23) with electric purple (#a855f7) and vibrant orange (#fb923c) accents
- Dual radial gradients for depth and visual interest
- Glassmorphism effects with enhanced blur
- Smooth animations on hover and interactions
- Gradient text for headings with purple-to-orange flow
- Centered layout for professional appearance

### 2. **Component Architecture**
- **Container/Presentational pattern**: Pages handle logic, components handle UI
- **Custom hooks**: Separate data fetching logic from UI
- **Service layer**: Centralized API calls for maintainability

### 3. **State Management**
- Local state for UI interactions
- Custom hooks for server state
- No Redux needed for this scope (keeps it simple)

### 4. **Form Validation**
- Client-side validation for immediate feedback
- Email format validation using regex
- Required field checks
- Real-time error clearing

### 5. **Performance Optimizations**
- Debounced search (300ms) to reduce API calls
- Memoized callbacks in hooks
- Efficient re-rendering with proper dependency arrays

### 6. **Accessibility**
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper focus management

## 🎯 Key Features Implementation

### Debounced Search
```typescript
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearchQuery(searchQuery);
    setPage(0);
  }, 300);
  return () => clearTimeout(timer);
}, [searchQuery]);
```

### Custom Hooks Pattern
```typescript
const { users, loading, error, refetch } = useUsers();
const { createUser, updateUser, deleteUser } = useUserMutations();
```

### Form Validation
- Name: Required, minimum 2 characters
- Email: Required, valid email format
- Role: Required, one of [admin, manager, user]
- Status: Required, one of [active, inactive]

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📈 Future Enhancements

Potential features for expansion:
- 🔐 Authentication and authorization
- 👥 Role-based access control (RBAC)
- 📊 Analytics dashboard
- 🔄 Bulk operations (multi-select and delete)
- 📤 Export users to CSV/Excel
- 🔔 Real-time updates with WebSockets
- 🌍 Internationalization (i18n)
- 🎨 Theme customization
- 📱 PWA support

## 🤝 Contributing

This is a demo project. Feel free to fork and modify as needed!

## 📄 License

MIT License - feel free to use this project for learning or as a portfolio piece.

## 👨‍💻 Author

Built with ❤️ as a demonstration of modern React development practices.

---

**Happy Coding! 🚀**
