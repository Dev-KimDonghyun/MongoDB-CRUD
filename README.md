# MongoDB-CRUD

Dev-KimDonghyun's personal project

## Description

This repository is a CRUD practice project produced using ExpressJS and MongoDB

## Tech Stack

- JavaScript
- ExpressJS
- MongoDB

<a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=javascript,expressjs,mongodb&theme=dark&perline=15" alt="My Skills" /></a>

## Installation

1. `git clone https://github.com/Dev-KimDonghyun/MongoDB-CRUD.git`

2. `npm install`

3. `npm start`

4. Create `.env` file in the project root

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
