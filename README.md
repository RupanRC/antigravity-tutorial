# Antigravity React Tutorial

Welcome to the official documentation for the Antigravity React Tutorial application! This project was seamlessly built alongside Antigravity to demonstrate how AI can accelerate modern web development, focusing on React structure, modularity, and dynamic CSS design.

## 🚀 Getting Started

To get this application running locally on your machine, follow these simple steps:

### 1. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed (which includes `npm`). Open your terminal inside the project directory and run:
```bash
npm install
```

### 2. Start the Development Server
Once the dependencies map out their installation, you can boot up the blazing fast Vite development server by running:
```bash
npm run dev
```

### 3. View the Application
Open your preferred web browser and navigate to the local host address: 
`http://localhost:5173/`

*(Any changes you make to the code will automatically hot-reload in the browser!)*

---

## 📁 Project Structure

This application is built with **React** via the **Vite** bundler, relying on custom CSS for its modern aesthetic. 

```text
antigravity-tutorial/
├── docs/                  # Image and video assets for our walkthroughs
├── public/                # Public/static assets like favicons
├── src/
│   ├── components/        # Isolated, reusable React components
│   │   ├── FeatureCard.jsx # Reusable UI module for topic cards
│   │   ├── Footer.jsx      # Bottom layout module
│   │   ├── Header.jsx      # Top layout title and subtitle module
│   │   └── MainContent.jsx # Central layout module (handles the grid and interactive state)
│   ├── App.jsx            # Parent container that imports and stacks components
│   ├── index.css          # The single global stylesheet holding all variables/design tokens
│   └── main.jsx           # React mounting wrapper
├── README.md              # The documentation file you're reading now!
├── SETUP_GUIDE.md         # Beginner breakdown of Vite scaffolding commands
└── WALKTHROUGH.md         # Visual timeline of our project milestones
```

---

## ✨ Key Technical Features

### Component Modularity
The core UI is split into clean, single-responsibility files inside the `src/components/` directory. Rather than an overwhelming single file, code is managed logically.

### Local State Management
We implemented React's `useState` hook directly inside `MainContent.jsx`. This isolates the interactive "Level of Amazement" counter safely so that it manages its own localized state without polluting the parent `App` component.

### Dynamic Rendering
Rather than hard-coding 4 separate HTML layout blocks, `MainContent.jsx` contains a single Javascript array (`features`) and utilizes standard Javascript mapping (`.map()`) to dynamically render the custom `<FeatureCard />` component over and over with different parameters.

### Glassmorphism & Modern Web Design
The styling logic in `index.css` employs advanced but easily readable vanilla CSS. It uses deep CSS custom variables (`:root`), translucent backgrounds mixed with `backdrop-filter: blur()`, and dynamic glowing gradients to immediately secure a premium Dark Mode aesthetic right out of the box.

---

## 🛠 Technologies Used
- **[React](https://react.dev/)**: The core JavaScript library for building component-based interfaces.
- **[Vite](https://vitejs.dev/)**: The incredibly fast, modern frontend build tool (replaces older bundlers like Create React App).
- **Vanilla CSS**: We intentionally avoided overarching frontend libraries like Tailwind or Bootstrap so that you have total, pure control over exactly how the browser paints the application.
