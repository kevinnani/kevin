# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Install Redux Toolkit (Recommended for modern Redux)
npm install @reduxjs/toolkit react-redux

# Install Redux Thunk (for async actions like fetching JSON data)
npm install redux-thunk

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Rect scrol 
npm install react-scroll

# bootstrap
npm install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

# MUI
npm install @mui/material @emotion/react @emotion/styled
# icons
npm install @mui/icons-material


#Backgrounds
GSAP (Most Powerful for Animations)
npm install gsap

#Moving particles & cool effects
npm install react-tsparticles

# animation 
npm install react-tsparticles tsparticles
npm install react-tsparticles
ALL
npm install react-tsparticles tsparticles tsparticles-engine tsparticles-react

# deploy
#  Install GitHub Pages Package
npm install gh-pages --save-dev

package.json and add:
"homepage": "https://<your-github-username>.github.io/<your-repo-name>"

scripts
"scripts": {
  "start": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# git 
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
git push -u origin main


npm run deploy

vite.config.js includes
export default defineConfig({
  base: "/kevin/", // Add this line
  plugins: [react()],
});

# animation 
✅ Framer Motion for UI animations (recommended)
npm install framer-motion

✅ GSAP for scroll animations
npm install gsap

✅ Lottie for icons
npm install lottie-react

