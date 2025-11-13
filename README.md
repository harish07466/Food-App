# 🍔 Food Recipe Finder App (React + Vite)

A clean and fast **Food Recipe Search Application** built using **React + Vite**.  
This app uses the powerful **Spoonacular API** to fetch recipes based on a user’s search input and displays recipe cards, images, and essential details.

---

## 🚀 Live Demo  

🌐 *(Add your Netlify link here)*  

Example:  
https://your-foodapp.netlify.app/

---

## 📛 Tech Stack & Tools

<div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="55" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="55" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="55" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="55" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" width="55" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" width="55" />
</div>

---

## 📸 Screenshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/58d0fe10-6239-4db0-9f4a-156e6cbdf543" width="100%" /></td>
    <td><img src="https://github.com/user-attachments/assets/dd2e28bd-fe3a-4eba-844c-1c0e3d2fcd73" width="100%" /></td>
    <td><img src="https://github.com/user-attachments/assets/2d62897d-af2e-4719-8ffe-0807c0219b50" width="100%" /></td>
  </tr>
</table>

---

## ✨ Features

- 🔍 **Search recipes** by keyword  
- 🍽️ **Responsive recipe cards** with image & title  
- 📄 **Detailed recipe info page**  
- ⚡ **Real-time API search using Spoonacular**  
- 🎨 **CSS Modules for scoped styling**  
- 📱 Fully responsive for all screen sizes  
- 🚀 Powered by Vite for fast bundling and HMR  

---

## 🧩 Component Overview

- **Search.jsx** – Input field + API call logic  
- **FoodList.jsx** – Renders list of recipe cards  
- **FoodItem.jsx** – A single card component  
- **ItemList.jsx** – Reusable item container  
- **FoodDetails.jsx** – Details for selected recipe  
- **Nav.jsx** – Navigation bar  
- **CSS Modules** – Styling using `*.module.css`  

---

## 📁 Project Structure

```

FoodApp/
│
├── src/
│   ├── Components/
│   │   ├── Search.jsx
│   │   ├── FoodList.jsx
│   │   ├── FoodItem.jsx
│   │   ├── ItemList.jsx
│   │   ├── FoodDetails.jsx
│   │   ├── Nav.jsx
│   │   └── *.module.css
│   ├── assets/
│   ├── main.jsx
│   ├── App.jsx
│   └── style.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

````

---

## 🔧 Local Setup (Run the Project Locally)

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/FoodApp.git
````

### 2️⃣ Navigate into the project

```sh
cd FoodApp
```

### 3️⃣ Install dependencies

```sh
npm install
```

### 4️⃣ Start the development server

```sh
npm run dev
```

Your app will run at:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🔑 API Key Usage (Your Current Setup)

You added your Spoonacular API key directly inside the code:

```jsx
const API_KEY = "your_api_key";
```

⚠️ Warning: If you push code to GitHub, the API key becomes public.
You can switch to `.env` anytime for security.

---

## 🏗️ Build for Production

```sh
npm run build
```

This generates optimized files inside **dist/**.

---

## 🌐 Deploy on Netlify

### Build Command

```
npm run build
```

### Publish Directory

```
dist
```

To deploy:

* Upload the `dist/` folder manually
  **OR**
* Connect GitHub repo → automatic Netlify build

---

## 🤝 Contributing

```
1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request
```

---

## 👤 Author

**Harish M Kumbar**

🔗 GitHub: [https://github.com/harish07466](https://github.com/harish07466)

🌐 Live App: *(https://food-app-webiste07.netlify.app/)*

---

## ⭐ Support

If you like this project, please ⭐ **star the repository**!
