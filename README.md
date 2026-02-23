# StudentIT Dashboard Refactor

Welcome to the refactored StudentIT project. The structure has been overhauled to enforce a strict **Separation of Concerns** between student and staff views, ensuring the project remains scalable and understandable even under pressure.

## 🚀 Getting Started

1.  Open `index.html` at the root to access the login page.
2.  Login redirects you to the student portal by default.
3.  Direct access to portals:
    - **Student**: `/portal-student/index.html`
    - **Coordinator**: `/portal-coordinator/index.html`

## 📁 Folder Overview

- **`core/`**: The heart of the application. Contains the design system and global assets.
- **`portal-student/`**: Everything the student sees and does.
- **`portal-coordinator/`**: Everything the IT Coordinator / Supervisor sees and does.

## 📜 Development Guidelines

Please refer to [`.project-rules.md`](./.project-rules.md) for strict rules on where to put your code and how to handle shared resources.

---

*Refactored for clarity and maintainability.*
