# Stock-dashboard
ValueGlance Coding Assessment
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 📈 Stock Dashboard (ValueGlance Coding Assessment)

A responsive stock price dashboard built with **React** that displays real-time stock data, supports searching and sorting, and combines a predefined stock set with user-added symbols.

🔗 **Live Demo:**  
https://your-vercel-link.vercel.app

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

- 📉 **Mini Charts (Sparklines)**
  - Each stock includes a small trend chart for quick visual insight

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
