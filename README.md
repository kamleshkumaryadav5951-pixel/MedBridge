# 🏥 MedBridge  
### AI Powered Smart Healthcare Triage System  

---

## 📌 Overview  

**MedBridge** is an AI-powered healthcare triage web application designed to reduce hospital overcrowding by intelligently assessing patient symptoms and recommending the most suitable hospital based on severity and real-time crowd levels.

This project was built as a hackathon prototype to demonstrate how AI-driven triage and smart hospital ranking can improve patient flow and reduce unnecessary emergency visits.

---

## 🎯 Problem Statement  

Hospitals today face:

- 🚑 Emergency room overcrowding  
- ⏳ Long patient waiting times  
- 🏥 Unnecessary hospital visits  
- 📊 Poor visibility into hospital crowd levels  

These issues delay treatment for critical patients and increase system stress.

---

## 💡 Our Solution  

MedBridge introduces:

- 🤖 AI-based smart symptom triage  
- 📊 Hospital crowd-based ranking (prototype logic)  
- 🏥 ICU-priority filtering for critical patients  
- 🎯 Smart recommendations:
  - 🟢 Home Care  
  - 🟡 Visit Doctor  
  - 🔴 Emergency Required  

The system ensures high-risk patients are prioritized while low-risk cases are guided properly.

---

## 🚀 Core Features  

### 🟦 1. Smart Symptom Input  

- Patient Name  
- Age  
- Symptoms  
- Duration  
- Severity Slider (1–10)  

Data is sent to backend for evaluation.

---

### 🟨 2. AI Risk Assessment  

| Severity Score | Risk Level | Suggested Action |
|---------------|------------|-----------------|
| 1 – 4         | 🟢 Low      | Home Care |
| 5 – 7         | 🟡 Moderate | Visit Doctor |
| 8 – 10        | 🔴 High     | Emergency Required |

Includes:

- Color-coded risk indicator  
- AI-generated medical summary  
- Alert for high-risk cases  

---

### 🟥 3. Smart Hospital Ranking  

Hospitals are ranked based on:

- Crowd Level  
- ICU Availability  
- Available Beds  
- Waiting Time  
- Distance  
- Rating  

**Prototype Smart Logic:**

- If Severity > 7 → ICU Available + Low Crowd First  
- If Severity ≤ 7 → Nearest Low/Medium Crowd Hospitals  

---

### 🏥 4. Mock Dataset  

- 25 Hospitals (Noida & Greater Noida)  
- 30 Symptom Cases  
- Crowd Status: Low / Medium / High  
- ICU Availability  
- Waiting Time  
- Distance (Mock Data)  

---

### 📊 5. Bonus Features  

- 📈 Crowd Analytics Bar Chart  
- 🟢🟡🔴 Risk Indicator Meter  
- ⏳ Loading Animation before AI result  

---

## 🛠️ Tech Stack  

### Frontend  
- React.js  
- React Router  
- Tailwind CSS  

### Backend  
- Node.js  
- Express.js  

### Database  
- Mock JSON Dataset (Supabase-ready structure)  

---

## 📂 Project Structure  

