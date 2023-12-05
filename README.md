# Mern Todo

Mern Todo is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to manage their workout data by providing features such as adding, editing, and deleting workout entries.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Set Up Environment Variables](#set-up-environment-variables)
- [Usage](#usage)
  - [Start the Backend Server](#start-the-backend-server)
  - [Start the Frontend Application](#start-the-frontend-application)
  - [Access the Application](#access-the-application)
- [Backend](#backend)
  - [Backend Technologies](#backend-technologies)
  - [Backend Structure](#backend-structure)
- [Frontend](#frontend)
  - [Frontend Technologies](#frontend-technologies)
  - [Frontend Structure](#frontend-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Mern Todo is a versatile todo application tailored for managing workout data. It seamlessly integrates a backend built with Node.js, Express.js, and MongoDB, providing a robust API for interacting with workout entries. The frontend is crafted with React and leverages Ant Design Pro Components for a sleek and user-friendly interface.

## Features

- **Workout Management:** Add, edit, and delete workout entries.
- **Interactive Interface:** Utilizes Ant Design Pro Components for an elegant and responsive UI.
- **Backend API:** Built with Node.js, Express.js, and MongoDB, offering RESTful endpoints for seamless data management.
- **Data Validation:** Ensures data integrity with validation rules for workout entries.
- **Contributor-Friendly:** Open for contributions through issues and pull requests.

## Installation

### Clone the Repository

```bash
git clone <https://github.com/PriyanshuGupta28/Mern-Todo.git>

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd /frontend
npm install

Access the Application
Open your browser and visit http://localhost:3000 to access the Mern Todo application.

Backend
The backend of the Mern Todo application is built using Node.js, Express.js, and MongoDB. It provides RESTful API endpoints for managing workout data.

Backend Technologies
Node.js
Express.js
MongoDB (Mongoose)
Backend Structure
server.js: Entry point of the backend server.
routes/workouts.js: Express router for handling workout-related routes.
models/Workout.js: Mongoose model for the workout data.
Frontend
The frontend of the Mern Todo application is built using React and Ant Design Pro Components. It includes an editable table for displaying workout data and a modal form for adding new workout entries.

Frontend Technologies
React
Ant Design Pro Components
Axios
Frontend Structure
src/Components/ModalForm/ModalForm.js: React component for the workout form.
src/pages/Home/Home.js: React component for the main page displaying workout data.
Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are highly appreciated!

License
This project is licensed under the [Your License Name] License - see the LICENSE file for details.

# Install backend dependencies
cd backend
npm start
```
