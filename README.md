# StudyMate - Learning Management Platform

A modern, full-stack web application designed for students to organize, track, and enhance their learning activities.

---

## 🌐 Live Site

- **Client (Frontend):** [StudyMate Client](https://tubular-kelpie-ddfff1.netlify.app)  
- **Server (Backend):** [StudyMate Server](https://studymate-crud-server-eudme5cl5-sm-atikur-rahmans-projects.vercel.app)  

---

## ✨ Features

- 🔐 **Secure Authentication:** Email/password login/signup and Google sign-in  
- 📚 **Course Management:** Create, enroll, and track courses and modules  
- 📝 **Task & Assignment Tracking:** Submit assignments, monitor progress, and deadlines  
- 📊 **Analytics Dashboard:** Performance tracking with charts and statistics  
- 📱 **Fully Responsive:** Optimized for mobile, tablet, and desktop  
- 🛡️ **Protected Routes:** Only authenticated users can access course content  
- 🌙 **Dark/Light Mode:** Theme toggle with localStorage persistence  

---

## 🛠️ Tech Stack

**Frontend:**  
- React  
- Vite  
- React Router  
- Tailwind CSS + DaisyUI  
- Recharts (analytics charts)  

**Backend:**  
- Node.js + Express  
- MongoDB  
- JWT Authentication  
- CORS  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)  
- MongoDB Atlas or local MongoDB  

### Installation

```bash
# Clone the repository
git clone https://github.com/chayanatik1994/studymate.git
cd studymate
Install server dependencies:

bash
Copy code
cd studymate-server
npm install
Install client dependencies:

bash
Copy code
cd ../studymate-client
npm install
# Terminal 1 - Server
cd studymate-server
npm start

# Terminal 2 - Client
cd studymate-client
npm run dev
📁 Project Structure
pgsql
Copy code
studymate/
├── studymate-client/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── Home/
│   │   │   ├── Courses/
│   │   │   ├── Dashboard/
│   │   │   ├── Auth/
│   │   │   └── Profile/
│   │   ├── components/
│   │   ├── contexts/
│   │   └── hooks/
│   └── package.json
└── studymate-server/
    ├── index.js
    └── package.json
🎯 Key Features Breakdown
Students:

Browse available courses

Track assignments and progress

Update profile and preferences

Teachers:

Create and manage courses

Review submissions

Track student performance

Admin:

Manage users and courses

Monitor platform analytics

🔒 Security Features
JWT-based authentication for all routes

Role-based access control (Student, Admin)

Protected routes with authentication persistence

📄 License
This project is part of a coding challenge/assignment.









