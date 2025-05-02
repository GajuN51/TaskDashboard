# Task Management Dashboard

An interactive, themeable task management dashboard built with React. This project demonstrates intermediate to advanced React concepts, including context, custom hooks, async data handling, theming, and more.

##  Features

- **Task Management**: Create, edit, delete, and view tasks
- **Task Filtering**: Filter tasks by status, priority, and search
- **Task Detail View**: View all details for a single task
- **Light/Dark Theme**: Toggle between light and dark mode (persistent)
- **Persistent Data**: Tasks are saved in localStorage
- **Mock API**: Simulated async CRUD operations with loading and error states
- **Performance Optimizations**: Uses React.memo, useCallback, and useMemo
- **Responsive Layout**: (Basic)

##  Project Structure

- `src/context/TaskContext.tsx` — Task data, CRUD, and state management
- `src/context/ThemeContext.tsx` — Theme state and toggle
- `src/api/mockTaskApi.ts` — Mock async API with localStorage
- `src/components/Sidebar.tsx` — Sidebar navigation and theme toggle
- `src/components/MainLayout.tsx` — Layout with sidebar and main content
- `src/pages/` — Dashboard, Create, Edit, Filter, and Task Detail pages

##  Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GajuN51/TaskDashboard.git
   cd to the folder
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. **Open in your browser:**
   Visit [http://localhost:5173]

##  Assumptions & Decisions
- All data is stored in localStorage (no real backend)
- Mock API simulates network delay and errors
- Sidebar is always white; main content area changes with theme
- Form validation is handled in a utility function
- Theming is managed via CSS variables and context

##  How to Use
- Use the sidebar to navigate between Task Management and Filter Operations
- Add, edit, delete, and view tasks
- Toggle light/dark mode using the sidebar button
- All changes are saved automatically in  browser

---

