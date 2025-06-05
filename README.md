#  JobConnect

A **Job Portal application** built with **React**, **TypeScript**, **Express**, **MongoDB**, and following **Clean Architecture** and **SOLID principles**.

---

##  Project Structure

```
jobconnect/
├── frontend/   # React + TypeScript
└── backend/    # Express + MongoDB + TypeScript
```

---

##  Setup

###  Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

---

###  Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in `.env`:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/jobconnect
   JWT_SECRET=your_jwt_secret

   # SMTP for email verification
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

4. Start MongoDB and run the development server:

   ```bash
   npm run dev
   ```

---

##  Features (In Progress)

-  Home page with job categories and search bar.
-  Registration page with role selection and form validation.
-  Backend API setup with Express, MongoDB, and Clean Architecture.
-  Modular authentication system (register/login using OTP and password).
-  Built using **SOLID principles** and **modular folder structure**.
-  Clean TypeScript codebase with GitHub branching strategy.

---

##  Notes

- Please ensure MongoDB is running locally before starting the backend.
- Uses `dotenv`, `ts-node-dev`, and `bcrypt` for backend.

---

##  Contributing

Pull requests are welcome. Please open an issue first to discuss what you would like to change or add.

---

##  License

This project is licensed under the [MIT License](LICENSE).
