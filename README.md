# 📈 Stock Dashboard (ValueGlance Coding Assessment)

A responsive stock price dashboard built with **React** that displays real-time stock data, supports searching and sorting, and combines a predefined stock set with user-added symbols.

🔗 **Live Demo:**  
[https://your-vercel-link.vercel.app](https://stock-dashboard-gold-six.vercel.app/)

---

## 🧠 Problem Overview

This project was built as part of the **ValueGlance Coding Assessment**.  
The objective was to design and implement a clean, user-friendly stock dashboard that fetches live market data and presents it in a structured, interactive format.

---

## ✨ Features

- 📊 **Stock Table**
  - Stock Symbol
  - Current Price
  - Percentage Change

- 🔍 **Search & Add Stocks**
  - Users can search for stock symbols
  - Press **Enter** or click **Add** to fetch stock data
  - User-added stocks are merged with a predefined stock list

- ↕️ **Sorting**
  - Sort stocks by:
    - Price
    - Percentage Change

- ⏳ **Loading & Error States**
  - Displays loading indicators during API calls
  - Handles API errors gracefully

- 📱 **Responsive Layout**
  - Optimized for desktop and mobile screens

---

## 🛠️ Tech Stack

- **Frontend:** React (Create React App)
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Charts:** Chart.js
- **Stock API:** Alpha Vantage / Finnhub
- **Deployment:** Vercel

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Favk/Stock-dashboard.git
cd Stock-dashboard
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment Variables

Create a .env file in the project root:
```bash
REACT_APP_API_KEY=your_api_key_here
```
# ⚠️ API keys are not committed to GitHub.

### 4️⃣ Run the application
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 📦 Build for Production
`npm run build`
## Creates an optimized production build in the `build/` directory.

---

### 🌍 Deployment

This project is deployed using Vercel.

Deployment configuration:

Build Command: npm run build

Output Directory: build

Environment variables are configured in the Vercel dashboard.

---

### 📌 Design Decisions

A predefined stock list ensures immediate usability

User-added stocks improve flexibility and interactivity

Client-side sorting minimizes unnecessary API calls

Tailwind CSS enables fast styling and responsive design

### 🔮 Future Improvements

Persist watchlist using localStorage

Pagination or virtualization for large stock lists

Unit tests for data fetching and sorting logic

Dark mode support
