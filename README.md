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





#📈 Stock Dashboard (ValueGlance Coding Assessment)

A responsive stock price dashboard built with React that displays real-time stock data, supports searching and sorting, and combines a predefined stock set with user-added symbols.

#🔗 Live Demo:
##👉 [https://your-vercel-link.vercel.app](https://stock-dashboard-gold-six.vercel.app/)

#🧠 Problem Overview

This project was built as part of the ValueGlance Coding Assessment.
The goal was to create a simple, clean stock dashboard that:

###Fetches stock price data from a public API

###Displays data in a table

###Uses modern frontend practices

###Handles real-world UX concerns such as loading, errors, searching, sorting

## Features

#📊 Stock Table

Symbol

Current Price

Percentage Change

🔍 Search & Add Stocks

Search for a stock symbol

Press Enter or click Add to fetch and display it

User-added stocks are merged with a predefined stock list

↕️ Sorting

Sort stocks by:

Price

Percentage change

⏳ Loading & Error States

Graceful handling of API delays and failures

📱 Responsive Design

Works on desktop and mobile screens

🛠️ Tech Stack

Frontend: React (Create React App)

Language: JavaScript

Styling: Tailwind CSS

Charts: Chart.js (sparklines)

API: Finnhub (free stock API)

Deployment: Vercel

🚀 Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/Favk/Stock-dashboard.git
cd Stock-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Set up environment variables

Create a .env file in the root:

REACT_APP_API_KEY=your_api_key_here


⚠️ API keys are not committed to GitHub.

4️⃣ Run the app
npm start

Open:
👉 http://localhost:3000

📦 Build for Production
npm run build

Creates an optimized production build in the build/ folder.


📌 Design Decisions

Predefined + user-added stock list ensures the dashboard is useful immediately while still being interactive

Sorting on the client avoids unnecessary API calls

Mini charts provide quick trend insight without overwhelming the UI

Tailwind CSS enables rapid styling and responsive layouts

🔮 Future Improvements

Pagination or virtualized tables for large datasets

Watchlist persistence using localStorage

Unit tests for data fetching and sorting logic

Dark mode toggle

👩🏽‍💻 Author

Favour Kolade
Software Engineer | Security-focused Developer
🔗 LinkedIn: https://www.linkedin.com/in/favour-kolade/
