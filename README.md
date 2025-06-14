# 💬 Real-Time Chat Application

[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8.1-black?style=for-the-badge&logo=socket.io)](https://socket.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.8-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, full-stack real-time chat application built with React, Node.js, and Socket.IO. This application provides real-time messaging capabilities with features like user authentication, profile management, and image sharing.

## ✨ Features

- 🔐 **Authentication**
  - Secure user registration and login
  - JWT-based authentication
  - Protected routes

- 💬 **Real-time Messaging**
  - Instant message delivery
  - Message status indicators
  - Typing indicators

- 👤 **User Profiles**
  - Customizable avatars
  - Profile information
  - Online/offline status

- 📸 **Media Sharing**
  - Image upload support
  - Cloudinary integration
  - Preview capabilities

- 🎨 **UI/UX**
  - Modern and responsive design
  - 15+ beautiful themes
  - Dark/Light mode support
  - Smooth animations

- 🔒 **Security**
  - Password encryption
  - Secure cookie handling
  - Protected API endpoints

## 🛠️ Tech Stack

### Frontend
- ⚛️ React 19
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎯 DaisyUI
- 🔌 Socket.IO Client
- 🛣️ React Router DOM
- 📦 Zustand (State Management)
- 🔄 Axios
- 🔔 React Hot Toast

### Backend
- 🟢 Node.js
- 🚀 Express.js
- 🔌 Socket.IO
- 🍃 MongoDB with Mongoose
- 🔐 JWT Authentication
- ☁️ Cloudinary (Image Storage)
- 🔒 bcryptjs (Password Hashing)

## 📋 Prerequisites

- ⚡ Node.js (v14 or higher)
- 🍃 MongoDB
- ☁️ Cloudinary Account

## Environment Variables

### Backend (.env)
```env
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://****:****@cluster0.****.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0

# Authentication
JWT_SECRET=****_app

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=****
CLOUDINARY_API_KEY=****
CLOUDINARY_API_SECRET=****
```

### Frontend (.env)
```env
VITE_PUBLIC_BACKEND_URL=http://localhost:5001
VITE_PUBLIC_SOCKET_URL=http://localhost:5001
MODE=development
```

## 🚀 Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd chatApp
```

2. **Install backend dependencies:**
```bash
cd backend
npm install
```

3. **Install frontend dependencies:**
```bash
cd ../frontend
npm install
```

## 💻 Running the Application

1. **Start the backend server:**
```bash
cd backend
npm run dev
```

2. **Start the frontend development server:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- 🌐 Frontend: http://localhost:5173
- 🔌 Backend: http://localhost:5001

## 📡 API Endpoints

### Authentication
- 🔐 POST `/api/auth/signup` - Register a new user
- 🔑 POST `/api/auth/login` - Login user
- 🚪 POST `/api/auth/logout` - Logout user
- 👤 PUT `/api/auth/update-profile` - Update user profile

### Messages
- 👥 GET `/api/messages/users` - Get users for sidebar
- 📤 POST `/api/messages/:id` - Send message to user
- 📥 GET `/api/messages/:id` - Get messages between users

## 🔌 Socket.IO Events

- 📨 `newMessage` - Emitted when a new message is sent
- 👋 `userDisconnected` - Emitted when a user disconnects

## 🎨 Available Themes

The application comes with multiple built-in themes that can be changed in real-time:

1. 🌞 Light Theme
2. 🌙 Dark Theme
3. 🧁 Cupcake
4. 🐝 Bumblebee
5. 💚 Emerald
6. 👔 Corporate
7. 🌈 Synthwave
8. 🕹️ Retro
9. 🤖 Cyberpunk
10. 💝 Valentine
11. 🌺 Garden
12. 🌲 Forest
13. 💧 Aqua
14. 🎨 Pastel
15. 🦄 Fantasy

To change themes:
1. ⚙️ Click on the setting in the navigation bar
2. 🎨 Choose your preferred theme
3. 💾 The theme will be automatically saved and persisted across sessions

2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔄 Open a Pull Request

## 🙏 Acknowledgments

- 🔌 Socket.IO for real-time communication
- ☁️ Cloudinary for image storage
- 🎨 Tailwind CSS for styling
- 🎯 DaisyUI for UI components and themes

