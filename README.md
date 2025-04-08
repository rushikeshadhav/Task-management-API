## 🧪 Postman Collection

You can test the API using the provided Postman collection:

🔗 [Download the collection](./postman/Task_Management_API.postman_collection.json)

> Make sure to register and login to get a JWT token. Use that token in the `Authorization` header as a Bearer Token for task routes.

# 📝 Task Management API

A simple and secure Task Management backend built with **Node.js**, **TypeScript**, **Express**, **Prisma**, and **PostgreSQL**. It supports **JWT-based authentication** and full **CRUD** operations for tasks.

---

## 🚀 Live Deployment

**Base URL**:  
🔗 [Deployed URL](https://task-management-api-1voz.onrender.com)


---


## 📁 API Endpoints

All protected routes require a valid JWT token.

### 🔐 Authentication

---

#### ✅ Register a new user

**POST** `/auth/register`

**Body:**

```json
{
  "username": "john_doe",
  "password": "securePassword123"
}
```

**Response:**

```json
{
  "message": "User registered successfully"
}
```

---

#### 🔑 Login user

**POST** `/auth/login`

**Body:**

```json
{
  "username": "john_doe",
  "password": "securePassword123"
}
```

**Response:**

```json
{
  "token": "your_jwt_token"
}
```

---

### 📋 Task Management

All routes below require an Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

---

#### ➕ Create a Task

**POST** `/tasks`

**Body:**

```json
{
  "title": "Learn Prisma",
  "description": "Understand how relations work",
  "status": "pending"
}
```

**Response:**

```json
{
  "id": "task-id",
  "title": "Learn Prisma",
  "description": "Understand how relations work",
  "status": "pending",
  "userId": "user-id"
}
```

---

#### 📚 Get All Tasks for User

**GET** `/tasks`

**Response:**

```json
[
  {
    "id": "task-id",
    "title": "Learn Prisma",
    "description": "Understand how relations work",
    "status": "pending",
    "userId": "user-id"
  }
]
```

---

#### ✏️ Update a Task

**PUT** `/tasks/:id`

**Body:**

```json
{
  "title": "Learn Prisma Relations",
  "description": "Updated description",
  "status": "in-progress"
}
```

**Response:**

```json
{
  "count": 1
}
```

---

#### 🗑️ Delete a Task

**DELETE** `/tasks/:id`

**Response:**

```json
{
  "message": "Task deleted"
}
```

---

## 📄 License

MIT

---

## 🙋‍♂️ Maintained by

**Rushikesh Adhav**  
[GitHub](https://github.com/rushikeshadhav)
