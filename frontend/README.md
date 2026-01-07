# React CRUD Application (Frontend)

This is the **frontend** of a CRUD (Create, Read, Update, Delete) application built using **React**, **Vite**, and **Tailwind CSS**. It provides a modern and responsive UI for managing users and interacts with a RESTful backend API.

---

## Features

* Display a list of users (Read)
* Add new users (Create)
* Edit existing users (Update) using modal popup
* Delete users (Delete)
* Responsive UI using Tailwind CSS
* Easy integration with any RESTful backend API

---

## Technologies Used

* **React** – For building UI components
* **Vite** – Fast build tool and development server
* **Tailwind CSS** – Utility-first CSS framework for styling
* **Axios / Fetch API** – For HTTP requests to backend
* **React Hooks** – `useState`, `useEffect` for state and lifecycle management

---

## Project Structure

```
react-crud-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── api/
│   │   └── userService.js       # Handles API requests (GET, POST, PUT, DELETE)
│   ├── components/
│   │   ├── UserList.jsx         # Displays the user list
│   │           
│   ├── App.jsx
│   ├── main.jsx                 # Entry point for Vite
│   └── index.css                # Tailwind CSS imports
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Jothini231/CRUD_Application.git
cd react-crud-frontend
```

2. **Install dependencies**

```bash
npm install
```

---

## Running the App

1. Make sure your backend API is running. Example backend URL: `http://localhost:8080/api/users`
2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser at the URL shown in the terminal (usually `http://localhost:5173`).

---

## Usage

* **View Users** – The homepage displays a list of users fetched from the backend.
* **Add User** – Click "Add User" to open a modal form and create a new user.
* **Edit User** – Click "Edit" on a user row to open a modal and update details.
* **Delete User** – Click "Delete" to remove a user.

---

## API Configuration

Update the API base URL in `src/api/userService.js` if your backend runs on a different host or port:

```javascript
const BASE_URL = "http://localhost:8080/api/users"; // Change if needed
```

Available API endpoints:

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/users     | Fetch all users   |
| GET    | /api/users/:id | Fetch single user |
| POST   | /api/users     | Create a new user |
| PUT    | /api/users/:id | Update a user     |
| DELETE | /api/users/:id | Delete a user     |

---

## Available Scripts

* `npm run dev` – Run the app in development mode
* `npm run build` – Build the app for production
* `npm run preview` – Preview the production build

---

##

##
