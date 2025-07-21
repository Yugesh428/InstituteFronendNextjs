# 🎓 Institute Management System - Frontend

A modern, scalable frontend application built using **Next.js 14**, **TypeScript**, and **Redux Toolkit** to manage institutes, teachers, students, and courses efficiently.

## 🚀 Features

- ✨ Modular folder structure with separation of concerns
- 🔐 Token-based API integration with Axios
- 🎛️ Global state management with Redux Toolkit
- 📦 Scalable store architecture (auth, institute, teacher, course)
- 🌐 Component-based UI with dynamic layout and reusable components
- ⚙️ Environment-configurable with `.env` support
- 💡 Type-safe development using TypeScript

---

## 🗂 Project Structure

src/
├── app/ # Next.js App Router (layout, page, providers)
├── lib/ # Shared UI components (e.g., Navbar)
├── http/ # Axios configuration & token middleware
├── store/ # Redux slices and store configuration
│ ├── auth/ # Auth slice and logic
│ ├── institute/ # Institute-related state (course, teacher)
│ └── teacher/ # Teacher-specific slice
├── types/ # Global types and interfaces

---

## 🔧 Tech Stack

| Technology    | Usage                          |
| ------------- | ------------------------------ |
| Next.js 14    | React-based frontend framework |
| TypeScript    | Static type checking           |
| Redux Toolkit | State management               |
| Axios         | HTTP client                    |
| CSS Modules   | Scoped styling                 |

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/institute-management-frontend.git
cd institute-management-frontend
npm install
```
"# InstituteFronendNextjs" 
