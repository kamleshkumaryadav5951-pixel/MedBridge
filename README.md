🏥 MedBridge
AI Powered Smart Healthcare Triage System
📌 Overview

MedBridge is an AI-powered healthcare triage web application designed to reduce hospital overcrowding by intelligently assessing patient symptoms and recommending the most suitable hospital based on severity and real-time crowd levels.

This project was built as a hackathon prototype to demonstrate how AI-driven triage and smart hospital ranking can improve patient flow and reduce unnecessary emergency visits.

🎯 Problem Statement

Hospitals today face:

🚑 Emergency room overcrowding

⏳ Long patient waiting times

🏥 Unnecessary hospital visits

📊 Poor visibility into hospital crowd levels

These issues increase stress on healthcare systems and delay care for critical patients.

💡 Our Solution

MedBridge introduces:

🤖 AI-based smart symptom triage

📊 Real-time hospital crowd ranking (prototype logic)

🏥 ICU-priority filtering for critical patients

🎯 Smart recommendations: Home Care / Doctor Visit / Emergency

The system ensures high-risk patients are prioritized while low-risk cases are guided appropriately.

🚀 Core Features
🟦 1. Smart Symptom Input

Patient Name

Age

Symptoms

Duration

Severity Slider (1–10)

Data is sent to backend for risk evaluation.

🟨 2. AI Risk Assessment

Based on severity score:

Severity	Risk Level	Suggested Action
1–4	🟢 Low	Home Care
5–7	🟡 Moderate	Visit Doctor
8–10	🔴 High	Emergency Required

Includes:

Risk indicator color coding

AI-generated medical summary

Alert for high-risk cases

🟥 3. Smart Hospital Ranking

Hospitals are ranked based on:

Crowd Level

ICU Availability

Available Beds

Estimated Waiting Time

Distance

Rating

Smart Logic (Prototype):

If Severity > 7 → ICU Available + Low Crowd First

If Severity ≤ 7 → Nearest Low/Medium Crowd Hospitals

🏥 4. Mock Hospital Dataset

25 Hospitals (Noida & Greater Noida)

Crowd Status: Low / Medium / High

ICU Availability

Waiting Time

Distance (Mock Data)

📊 5. Bonus Features

📈 Crowd Analytics Bar Chart

🟢🟡🔴 Risk Indicator Meter

⏳ Loading Animation before AI result

🛠️ Tech Stack
Frontend

React.js

React Router

Tailwind CSS

Backend

Node.js

Express.js

Database

Mock JSON Dataset (Supabase-ready structure)

🎨 UI/UX Design Principles

Clean medical theme

Blue & White color scheme

Modern card layout

Soft shadows & rounded corners

Responsive design

Professional hackathon-ready interface

⚙️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/medbridge.git
cd medbridge
2️⃣ Start Backend
cd backend
npm install
node server.js

Server runs on:

http://localhost:5000
3️⃣ Start Frontend
cd frontend
npm install
npm run dev

App runs on:

http://localhost:5173
🧠 Future Improvements

Real AI integration (OpenAI / ML model)

Live hospital API integration

Authentication system

Supabase real-time database

Geo-location based distance tracking

Doctor dashboard panel

🏆 Hackathon Impact

MedBridge demonstrates how AI can:

Reduce hospital overcrowding

Prioritize critical patients

Improve healthcare efficiency

Support smart city healthcare infrastructure

👨‍💻 Developed By

Sambhav Kumar
B.Tech CSE
IILM University Greater Noida

⭐ Why MedBridge Stands Out

✔ Practical real-world healthcare problem
✔ AI-based triage logic
✔ Smart hospital ranking
✔ Clean, modern UI
✔ Scalable architecture

If you want, I can also give you:

🔥 A more impressive “professional startup-style” README

📊 Add project screenshots section

🎤 Add hackathon pitch description

🏆 Add architecture diagram explanation

Just tell me 💙****
