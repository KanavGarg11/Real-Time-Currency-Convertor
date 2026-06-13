#💱 Currency Converter

A dynamic, asynchronous currency converter web application that fetches real-time currency exchange rates.

---

## 🚀 Features

* Real-Time Data : Fetches live exchange rates for over 150 currencies using Fetch API.
* Dynamic UI Rendering : Automatically updates national flags and currency names based on user selection via DOM manipulation.
* Bidirectional conversion
  - Convert Currency A → Currency B
  - Convert Currency B → Currency A
* Optimized API Calls (Debouncing) : Debounced input fields to reduce unnecessary API requests
* Async/Await based API handling
* Error handling for failed API requests
* Responsive and clean user interface

---

## 🛠️ Built With

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* Asynchronous Programming : Promises , Async/Await
* Currency API
* FlagCDN

---

## 📸 Preview

Add screenshots of your project here.

---

## 📂 Project Structure

```text
.
├── index.html
├── style.css
├── script.js
├── codes.js
└── README.md
```

---

## ⚙️ SETUP

### Clone the repository

```bash
git clone https://github.com/your-username/currency-converter.git
```

### Open the application

Simply open `index.html` in your browser.

---

### 🔑 API Key Setup

This project uses the CurrencyAPI and requires an API key for fetching live exchange rates.

1) Create an account at the API provider.
2) Generate your API key.
3) Open script.js.
4) Replace:

```javascript
const API_KEY = "ENTER_YOUR_API_KEY_HERE";
```

with:

```javascript
const API_KEY = "YOUR_ACTUAL_API_KEY";
```

Example:

```javascript
const API_KEY = "abc123xyz456";
```

## 🧠 Concepts Applied

* API Integration
* DOM Manipulation
* Dynamic Element Updates
* Event Listeners
* Fetch API
* Asynchronous Programming
* Callbacks
* Promises
* Async/Await
* Error Handling
* Debouncing

---

## 👨‍💻 Author

**Kanav Garg**
