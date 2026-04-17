# AI Agent Instructions for Nishak-Portfolio

This document provides context and guidelines for AI coding agents working on the Nishak-Portfolio project.

## 🛠️ Tech Stack
- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) (using `rolldown-vite`).
- **Routing:** [React Router DOM v7](https://reactrouter.com/).
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with a Glassmorphism design system.
- **Animations:** [Framer Motion](https://www.framer.com/motion/).
- **Smooth Scrolling:** [Lenis](https://github.com/darkroomengineering/lenis).
- **Icons:** `lucide-react` and `react-icons`.

## 📂 Project Structure
- **`src/`**: Main source code directory.
  - **`pages/`**: Main page sections (`Home.jsx`, `Projects.jsx`, `Contact.jsx`, etc.).
  - **`Components/`**: Reusable UI components (`Header.jsx`, `Navbar.jsx`, `CustomCursor.jsx`, etc.).
  - **`Root/`**: Root layout configuration (`Root.jsx`).
  - **`Router/`**: Routing configuration setup (`Router.jsx`).
  - **`assets/`**: Images and static files.

## 📜 Development Guidelines
1. **Components:** Create new components as functional components using modern React hooks (`useState`, `useEffect`). Avoid class components. Use `.jsx` extension for React files.
2. **Styling:** Use Tailwind CSS utility classes directly in the `className` attributes. Pay attention to the Glassmorphism aesthetics, utilizing styles like backdrop filters (`backdrop-blur`).
3. **Animations:** Rely on Framer Motion for interactive features (e.g., hover effects, tilt effects, entry animations).
4. **Scrolling:** Use Lenis for smooth browser scrolling interactions (`src/Components/SmoothScroll.jsx`).

## 💻 Common Commands
- **Start Dev Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Lint Code:** `npm run lint`
- **Preview Build:** `npm run preview`

## 🔗 Additional References
- Check the [README.md](./README.md) for full project overview and features.
