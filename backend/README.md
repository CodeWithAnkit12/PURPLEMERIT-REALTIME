# PurpleMerit Backend – Authentication Service

This project is a production-ready backend service built as part of the **PurpleMerit Backend Developer Assessment**.  
It implements secure authentication using **NestJS**, **PostgreSQL**, **JWT**, and **TypeORM**, with Docker support.

---

## 🚀 Tech Stack

- **Node.js**
- **NestJS 11**
- **PostgreSQL**
- **TypeORM**
- **JWT (Access + Refresh Tokens)**
- **Swagger (API Documentation)**
- **Docker & Docker Compose**

---

## 📂 Project Structure

backend/
│── src/
│ ├── config/ # App & DB configuration
│ ├── modules/
│ │ ├── auth/ # Auth module (login, register, refresh)
│ │ ├── users/ # User module & roles
│ ├── app.module.ts
│ ├── main.ts
│── docker-compose.yml
│── Dockerfile
│── .env
│── README.md

yaml
Copy code

---

## 🔐 Authentication Flow

- **Register** → Create a new user
- **Login** → Get `accessToken` + `refreshToken`
- **Refresh Token** → Generate new access token
- **Protected Routes** → JWT-based authorization
- **Role-based Access Control** (OWNER / USER)

---

## 🧪 API Documentation (Swagger)

Swagger UI is enabled for easy testing.

📘 **URL:**  
http://localhost:3000/api

markdown
Copy code

### How to authorize:
1. Call `/auth/login`
2. Copy `accessToken`
3. Click **Authorize 🔒**
4. Paste:
Bearer <accessToken>

makefile
Copy code

---

## 🛠 Environment Variables

Create a `.env` file in the `backend/` directory:

```env
APP_NAME=PurpleMerit Backend
PORT=3000

DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=purplemerit_db

JWT_SECRET=supersecretkey
JWT_REFRESH_SECRET=refreshsecretkey
JWT_EXPIRES_IN=900
JWT_REFRESH_EXPIRES_IN=604800
🐳 Run with Docker (Recommended)
bash
Copy code
docker compose up --build
The backend will be available at:

arduino
Copy code
http://localhost:3000
▶ Run Locally (Without Docker)
bash
Copy code
npm install
npm run start:dev