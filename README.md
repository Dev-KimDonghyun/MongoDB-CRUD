# MongoDB-CRUD

Dev-KimDonghyun's personal project

## Description

This repository is a CRUD practice project produced using ExpressJS and MongoDB

---

## Retrospective

### Experience:

By utilizing ExpressJS and MongoDB, I implemented a simple CRUD example based on a NoSQL database, which helped me understand the fundamental structure of server–database integration. However, since I skipped the design phase and developed on the fly, I felt that the overall completeness of the project was somewhat lacking.

### Next Action:

In my next project, I plan to first define a clear domain and design the CRUD logic accordingly. Before starting development, I will also prepare an overall architecture and API specification in advance, aiming to proceed with a more structured and systematic development process.

---

## Tech Stack

- JavaScript
- ExpressJS
- MongoDB

<a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=javascript,expressjs,mongodb&theme=dark&perline=15" alt="My Skills" /></a>

## Installation

1. `git clone https://github.com/Dev-KimDonghyun/MongoDB-CRUD.git`

2. `npm install`

3. Create `.env` file in the project root

4. `npm start`

## API Endpoints

### Data Model

```json
{
  "nickName": "string",
  "comment": "string",
  "createdAt": "number"
}
```

**“createdAt” is set in the server and is recommended that the client not arbitrarily modify it**

## Usage

You can test the API endpoints with tools like Postman

### 1. Create User

**POST** `/api/users`

- **Request**

```json
{
  "nickName": "string",
  "comment": "string"
}
```

- **Success Response**

```json
{
  "success": true,
  "data": "{ ...User }"
}
```

- **Fail Response**

```json
{
  "success": false,
  "message": "string"
}
```

---

### 2. Read Users List

**GET** `/api/users`

- **Success Response**

```json
{
  "success": true,
  "data": "[ ...User ]"
}
```

- **Fail Response**

```json
{
  "success": false,
  "message": "string"
}
```

---

### 3. Read User

**GET** `/api/users/:id`

- **Success Response**

```json
{
  "success": true,
  "data": "{ ...User }"
}
```

- **Fail Response**

```json
{
  "success": false,
  "message": "string"
}
```

---

### 4. User Update

**PATCH** `/api/users/:id`

- **Request**

```json
{
  "nickName": "string",
  "comment": "string"
}
```

- **Success Response**

```json
{
  "success": true,
  "data": "{ ...User }"
}
```

- **Fail Response**

```json
{
  "success": false,
  "message": "string"
}
```

---

### 5. User Delete

**DELETE** `/api/users/:id`

- **Success Response**

```json
{
  "success": true,
  "data": "{ ...User }"
}
```

- **Fail Response**

```json
{
  "success": false,
  "message": "string"
}
```

## License

This project is licensed under the MIT License
