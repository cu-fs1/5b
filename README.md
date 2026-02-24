# 🎓 Student Management System - Project Guide

## Starting the Project

Students should first follow the experiment guide to proceed with the project

- [Experiment 5 Guide](https://github.com/cu-fs1#experiment-5)

Welcome to the **Student Management System** project! This repository contains a complete implementation of a CRUD (Create, Read, Update, Delete) application using Node.js, Express, MongoDB, and EJS.

Instead of just looking at the code, use this guide to build the project from scratch yourself. Each section outlines a key component of the application.

---

## 🏗️ Project Architecture

The project follows the **MVC (Model-View-Controller)** pattern, which helps organize code by separating concerns:

-   **Models**: Define the data structure (schema) for MongoDB.
-   **Views**: The user interface templates (EJS) rendered for the browser.
-   **Controllers**: The logic that connects Models and Views, handling requests and responses.
-   **Routes**: Define the URL endpoints for the application.
-   **Config**: Centralized configuration (e.g., database connection).

---

## 🚀 Step-by-Step Implementation

### 1. Initialize the Project
Create a new directory and initialize your Node project. You can use either `npm` or `pnpm` depending on your package manager:
```bash
npm init -y           # or `pnpm init -y`
```
Update `package.json` to use ES Modules by adding `"type": "module"`. Install the dependencies:
```bash
npm install express mongoose ejs dotenv cors         # or `pnpm add express mongoose ejs dotenv cors`
npm install --save-dev nodemon                      # or `pnpm add -D nodemon`
```

### 2. Set Up Environment Variables
Create a `.env` file in the root to store sensitive configuration:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 3. Database Connection (`config/db.js`)
Create a `config` folder and a `db.js` file. Use Mongoose to connect to your MongoDB database. Handle connection success and failure gracefully.

### 4. Define the Schema (`models/student.model.js`)
Create a `models` folder and a `student.model.js` file. The student should have:
-   `name`: String, required, trimmed, with length validation.
-   `roll`: Number, required, unique, must be a positive integer.
-   `timestamps`: Enabled to track creation and update times.

### 5. Create API Logic (`controllers/student.controller.js`)
Create a `controllers` folder. Implement the following logic:
-   `getStudents`: Fetch all students with pagination and sorting.
-   `createStudent`: Save a new student to the database.
-   `getStudentById`: Find a specific student.
-   `updateStudent`: Modify an existing student's details.
-   `deleteStudent`: Remove a student from the database.

### 6. Set Up API Routes (`routes/student.routes.js`)
Create a `routes` folder. Map the controller functions to HTTP verbs and endpoints:
-   `GET /`: `getStudents`
-   `POST /`: `createStudent`
-   `GET /:id`: `getStudentById`
-   `PUT /:id`: `updateStudent`
-   `DELETE /:id`: `deleteStudent`

### 7. Build the UI (`views/`)
Create a `views` folder with a `students` subfolder.
-   `index.ejs`: Display the list of students in a table and provide a form to add new students.
-   `edit.ejs`: Provide a form to edit an existing student's details.
-   **Tip**: Use a CSS framework like Bootstrap to make the UI look professional.

### 8. View Routing (`routes/student.view.routes.js`)
Create routes specifically for rendering the EJS templates. Unlike API routes which return JSON, these will use `res.render()` to show pages and `res.redirect()` after actions like creating or deleting.

### 9. Main Entry Point (`index.js`)
Create `index.js` in the root. This is where you connect everything:
-   Initialize Express.
-   Set EJS as the view engine.
-   Register middleware (`cors`, `express.json`, `express.urlencoded`).
-   Import and use your API and View routes.
-   Listen on the specified port.

---

## 🧪 Testing Your Project

1.  **Run the App**: `npm run dev` (if you added the script to `package.json`).
2.  **API**: Use Postman or Thunder Client to test the `/students` endpoints.
3.  **UI**: Open `http://localhost:3000/view/students` in your browser.

---

## 💡 Learning Objectives
-   Understand how to use **Express** to create a web server.
-   Learn **Mongoose** for data modeling and MongoDB interaction.
-   Implement **CRUD** operations in a real-world scenario.
-   Practice using **EJS** for server-side rendering.
-   Master project organization using the **MVC** pattern.

Happy coding! 🚀
