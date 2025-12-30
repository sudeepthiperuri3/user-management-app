# Quick Start Guide

## Running the Application

### Option 1: Run both servers separately (Recommended)

**Terminal 1 - JSON Server (Mock API):**
```bash
cd n:\practice\user-management-app
npx json-server --watch db.json --port 3001
```

**Terminal 2 - Development Server:**
```bash
cd n:\practice\user-management-app
npm run dev
```

Then open your browser and navigate to: http://localhost:5173

### Option 2: Run concurrently (if you have concurrently installed)

```bash
npm run dev:all
```

## Available URLs

- **Frontend**: http://localhost:5173
- **API**: http://localhost:3001
- **API Users Endpoint**: http://localhost:3001/users

## Features to Test

1. **User List**: View all users with sorting, filtering, and pagination
2. **Search**: Type in the search box to filter users (debounced)
3. **Filters**: Use role and status dropdowns to filter users
4. **Add User**: Click "Add User" button to create a new user
5. **Edit User**: Click the edit icon on any user row
6. **View Details**: Click the view icon to see user details
7. **Delete User**: Click the delete icon (will ask for confirmation)
8. **Sorting**: Click column headers to sort

## Default Users

The application comes with 15 sample users with different roles:
- **Admins**: Alex Johnson, Sophia Anderson
- **Managers**: Sarah Williams, James Wilson, Ava Rodriguez, Mia Jackson
- **Users**: Michael Chen, Emma Davis, Olivia Brown, William Martinez, Liam Garcia, Noah Taylor, Isabella Thomas, Ethan Moore, Mason White

## Troubleshooting

### Port 5173 is already in use
Kill the process using port 5173 or change the port in vite.config.ts

### Port 3001 is already in use
Change the port in the npm script or kill the process using port 3001

### API Connection Error
Make sure JSON Server is running on port 3001

## Technologies Used

- React 19.2.0
- TypeScript 5.9.3
- Material-UI 7.3.6
- React Router 7.11.0
- JSON Server 1.0.0-beta.3
- Vite 7.2.4
