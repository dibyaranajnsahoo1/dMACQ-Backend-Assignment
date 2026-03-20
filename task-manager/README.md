# 🚀 Task Management API (Nx + NestJS + MongoDB)

A scalable, production-ready **Task Management Backend System** built using **NestJS inside an Nx Monorepo**, supporting authentication, role-based access, analytics, and modular architecture.

---

# 🧠 System Overview

- Multi-user task management
- JWT-based authentication
- Role-based access control (RBAC)
- Admin analytics
- Modular Nx backend architecture

---

# 🏗️ Architecture

```
Client (Postman / Frontend)
        ↓
   Controllers (API Layer)
        ↓
   Services (Business Logic)
        ↓
   Data Layer (Mongoose Models)
        ↓
   MongoDB / Cosmos DB
```

---

# 📁 Monorepo Structure

```
task-manager/
│
├── api/                # Main NestJS App
├── auth/               # Authentication Module
├── users/              # User Module
├── tasks/              # Task Module
├── analytics/          # Analytics Module
├── models/             # Schemas
├── data-access/        # DB Layer
├── utils/              # Helpers
```

---

# ⚙️ Tech Stack

| Layer          | Tech |
|----------------|------|
| Backend        | NestJS |
| Language       | TypeScript |
| Architecture   | Nx Monorepo |
| Database       | MongoDB / Cosmos DB |
| ORM            | Mongoose |
| Auth           | JWT + Passport |
| Container      | Docker |
| Testing        | Jest |

---

# 🔐 Authentication Flow

```
User → Register/Login → JWT Token
         ↓
Client stores token
         ↓
Token sent in Authorization Header
         ↓
Guard validates user
         ↓
Access granted/restricted
```

---

# 🛡️ Roles

| Role  | Access |
|-------|--------|
| USER  | Own tasks |
| ADMIN | All tasks + analytics |

---

# 📌 API Endpoints

## 🔐 Auth

### Register
```
POST /auth/register
```

Body:
```json
{
  "email": "dibyaranjan@gmail.com",
  "password": "123456"
}
```

---

### Login
```
POST /auth/login
```

Response:
```json
{
  "access_token": "JWT_TOKEN"
}
```

---

## 📋 Tasks

### Create
```
POST /tasks
```

Headers:
```
Authorization: Bearer TOKEN
```

Body:
```json
{
  "title": "My Task"
}
```

---

### Get All
```
GET /tasks
```

---

### Update
```
PUT /tasks/:id
```

---

### Delete
```
DELETE /tasks/:id
```

---

## 📊 Analytics

```
GET /analytics/tasks
```

---

# ⚙️ Installation

## Clone Repo

```bash
git clone https://github.com/dibyaranajnsahoo1/dMACQ-Backend-Assignment.git
cd task-manager
```

---

## Install

```bash
npm install
```

---

## Run MongoDB

```bash
docker run -d -p 27017:27017 mongo
```

---

## Start Server

```bash
nx serve api
```

---

# 🐳 Docker

## Dockerfile

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "dist/apps/api/main.js"]
```

---

## docker-compose.yml

```yaml
version: '3'
services:
  api:
    build: .
    ports:
      - '3000:3000'
    depends_on:
      - mongo

  mongo:
    image: mongo
    ports:
      - '27017:27017'
```

---

## Run Docker

```bash
docker-compose up --build
```

---

# 🧪 Testing

```bash
npm run test
npm run test:cov
```

---

# ⚠️ Error Handling

- Global Exception Filter
- HTTP Status Codes
- Validation Errors → 400
- Unauthorized → 401

---

# 📈 Scalability

- Nx modular architecture
- Easily extendable
- Microservices-ready
- Cosmos DB compatible

---

# 🔥 Future Improvements

- Swagger Docs
- Pagination & Filtering
- Rate Limiting
- Background Jobs (Bull)
- CI/CD
- Redis Caching

---

# 👨‍💻 Author

Dibya Ranjan Sahoo

---
