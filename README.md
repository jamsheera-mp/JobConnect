# JobConnect

A Job Portal application built with React, TypeScript, Express, MongoDB, and following Clean Architecture and SOLID principles.

## Project Structure

- `frontend/`: Frontend code built with React and TypeScript.
- `backend/`: Backend code built with Express and MongoDB.

## Setup

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend

2.Install dependencies:
  ```bash
  npm install

3.Run the development server:
  ```bash
  npm run dev

### Backend
1.Navigate to the backend directory:
  ```bash
  cd backend

2.Install dependencies:
'''bash
npm install

3.Set up environment variables in .env:
env


PORT=5000
MONGO_URI=mongodb://localhost:27017/jobconnect
JWT_SECRET=your_jwt_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
Start MongoDB and run the server:


```bash
npm run dev


## Features

- Home page with job categories and search bar.
- Registration page with form validation and role selection.
- Backend setup with Express, MongoDB, and registration API (in progress).