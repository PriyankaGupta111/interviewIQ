AI Interview Agent

An AI-powered interview preparation platform built using the MERN stack that helps users practice interviews, analyze resumes, generate AI-based interview questions, and receive performance feedback reports.

🚀 Features
🔐 User Authentication (Google Login with Firebase)
📄 Resume Upload & AI Resume Analysis
🤖 AI-Generated Interview Questions
⏱ Real-time Interview Timer
📊 Interview Performance Report
📈 Interactive Charts & Analytics
💳 Razorpay Payment Integration
📥 Downloadable PDF Reports
🎨 Modern Responsive UI with Animations
🛠 Tech Stack
Core Technologies
MongoDB – Database
Express.js – Backend Framework
React.js (Vite) – Frontend
Node.js – Runtime Environment
🎨 Frontend
Tailwind CSS
Framer Motion
Redux Toolkit
React Router DOM
Axios
React Icons
Recharts
react-circular-progressbar
🔐 Authentication & Security
Firebase Authentication
JSON Web Token (JWT)
Cookie Parser
CORS
🤖 AI & Resume Processing
OpenRouter API
GPT-4o-mini
Multer
PDF.js (pdfjs-dist)
💳 Payments
Razorpay
Crypto
📄 PDF Report Generation
jsPDF
autoTable

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/AI-Interview-Agent.git
cd AI-Interview-Agent
🔧 Backend Setup
cd server
npm install

Create .env file inside server/

PORT=8000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_SECRET=your_razorpay_secret

Start Backend Server

npm run dev
💻 Frontend Setup
cd client
npm install

Create .env file inside client/

VITE_FIREBASE_API_KEY=your_firebase_api_key

VITE_KEY_ID=" "


🤖 AI Workflow
User uploads resume
Resume parsed using PDF.js
Extracted text sent to OpenRouter API
GPT-4o-mini analyzes resume
AI generates personalized interview questions
User answers evaluated
Final report generated with analytics
📊 Performance Report Includes
Overall Interview Score
Technical Performance
Communication Analysis
Strengths & Weaknesses
AI Suggestions
Downloadable PDF Report
💳 Payment System

Users can purchase additional interview credits securely using Razorpay integration.

🚀 Deployment
Frontend Deployment

Deployed on Render as a Static Site.

Backend Deployment

Deployed on Render as a Web Service.

📸 Screenshots

Add your application screenshots here.

![Home Page](<img width="1601" height="870" alt="image" src="https://github.com/user-attachments/assets/c5c1c5b3-16e3-41a2-9647-0c438607ae43" />
)
![Interview Page](<img width="1553" height="840" alt="image" src="https://github.com/user-attachments/assets/9b753c4d-ce9c-407f-a907-1a054680fc4c" />
)

🧠 Future Improvements
Voice-based Interviews
Webcam Monitoring
Multi-language Support
AI HR Round Simulation
Real-time Coding Interviews
Interview History Dashboard
