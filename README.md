# CRUD API + Mongo

![WBS Coding School](https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.Z_5R~130ed/w:auto/h:auto/q:90/https://www.wbscodingschool.com/files/WBS_CODING_SCHOOL_logo.svg)

## Install

- Fork project
- Clone your fork:

```bash
git clone <link-to-project>
cd <project-directory>/
npm install
```

## Environment

Create a .env file with:

- MONGO_URI variable, it has to be a valid MongoDB connection string.

# Commands

## Dev

Dev commands runs app with nodemon

```bash
npm run dev
```

## Start

Start commands runs app with Node

```bash
npm start
```

# API routes and methods

- POST /users

-- Sample request:

```json
{
  "name": String,
  "lastName": String,
  "email": String,
  "age": String
}
```

-- Sample response

```json
{
  "_id": String,
  "name": String,
  "lastName": String,
  "email": String,
  "age": String
}
```

- GET /users

-- Sample response

```json
[
    {
        "_id": String,
        "name": String,
        "lastName": String,
        "email": String,
        "age": String
    }
]
```

- GET /users/:id

-- Sample response:

```json
{
    "_id": String,
    "name": String,
    "lastName": String,
    "email": String,
    "age": String
}
```
