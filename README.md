online-store
Overview
TTech Haven store is an e-commerce platform specializing in the latest tech gadgets and accessories. The project is built using React with Redux for state management and React Router for navigation. The application fetches product data from an external API and allows users to add items to a shopping cart.
Features
•	Display a list of tech gadgets.
•	Add items to a shopping cart.
•	View and manage the shopping cart.
•	Navigate between pages (Home, Products, Cart, About).
•	Checkout with a confirmation popup.
•	Loading animation for product fetching.
Technologies Used
•	React
•	Redux
•	React Router
•	Material UI (MUI) for UI components
•	Fetch API
•	CSS & Bootstrap
Installation
1.	Clone the repository:
2.	git clone https://github.com/rivkaShasha/online-store.git
3.	Navigate to the project folder:
4.	cd online-store
5.	Install dependencies:
6.	npm install
7.	Start the development server:
8.	npm start
Deployment
This project is deployed using GitHub Pages. To deploy:
npm run build
npm run deploy
Ensure the homepage field in package.json is set to:
"homepage": "https://github.com/rivkaShasha/online-store.git"
.gitignore
To avoid uploading unnecessary files, create a .gitignore file with:
node_modules/
build/
dist/
.env
.DS_Store
.vscode/
.idea/
logs/


