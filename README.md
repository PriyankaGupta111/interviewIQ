# AI Interview Agent

An AI-powered interview preparation platform built using the MERN stack that helps users practice interviews, analyze resumes, generate AI-based interview questions, and receive detailed performance feedback reports.

---


## 🚀 Live Demo
🔗 https://interviewiqclient.onrender.com

---

## 🚀 Features

- 🔐 User Authentication with Google Login
- 📄 Resume Upload & AI Resume Analysis
- 🤖 AI-Generated Interview Questions
- ⏱ Real-time Interview Timer
- 📊 Performance Analytics & Reports
- 📈 Interactive Charts & Insights
- 💳 Razorpay Payment Integration
- 📥 Downloadable PDF Reports
- 🎨 Modern Responsive UI with Animations

---

# 🛠 Tech Stack

## Core Technologies

- MongoDB
- Express.js
- React.js (Vite)
- Node.js

---

## 🎨 Frontend

- Tailwind CSS
- Framer Motion
- Redux Toolkit
- React Router DOM
- Axios
- React Icons
- Recharts
- react-circular-progressbar

---

## 🔐 Authentication & Security

- Firebase Authentication
- JSON Web Token (JWT)
- Cookie Parser
- CORS

---

## 🤖 AI & Resume Processing

- OpenRouter API
- OpenAI GPT-4o-mini
- Multer
- PDF.js (`pdfjs-dist`)

---

## 💳 Payments

- Razorpay
- Crypto

---

## 📄 PDF Report Generation

- jsPDF
- autoTable

---



# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/AI-Interview-Agent.git
```

```bash
cd AI-Interview-Agent
```

---

# 🔧 Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder.

```env
PORT=8000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_SECRET=your_razorpay_secret
```

Start Backend Server

```bash
npm run dev
```

---

# 💻 Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file inside the `client` folder.

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key


RAZORPAY_KEY_ID=your_razorpay_key
```

Start Frontend

```bash
npm run dev
```

---



---

# 🤖 AI Workflow

1. User uploads resume
2. Resume parsed using PDF.js
3. Extracted text sent to OpenRouter API
4. GPT-4o-mini analyzes resume
5. AI generates personalized interview questions
6. User answers evaluated
7. Final performance report generated

---

# 📊 Performance Report Includes

- Overall Interview Score
- Technical Performance
- Communication Analysis
- Strengths & Weaknesses
- AI Suggestions
- Downloadable PDF Report

---

# 💳 Payment System

Users can securely purchase additional interview credits using Razorpay integration.

---

# 🚀 Deployment

## Frontend Deployment

Deployed on Render as a Static Site.

## Backend Deployment

Deployed on Render as a Web Service.





# 🧠 Future Improvements

- 🎤 Voice-based Interviews
- 📹 Webcam Monitoring
- 🌍 Multi-language Support
- 🤖 AI HR Round Simulation
- 💻 Real-time Coding Interviews
- 📊 Interview History Dashboard





# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
