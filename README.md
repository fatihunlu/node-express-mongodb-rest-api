#  Simple Express + MongoDB Rest Api

Simple Node with Express + MongoDB Rest Api

## Features

- Express
- REST API
- MongoDB (mongoose)

## Requirements

- [Install node & npm](https://nodejs.org/en/)

## Installation

- `npm install`
- `npm start`
- Start mongodb (suggest using docker instead installing mongo on ur machine)\
`docker run -d -p 27017:27017 --name test-mongo mongo:latest`


## How it works
- You can test these APIs with [Postman](https://www.postman.com/)

## REST APIs

| EndPoint      | Url                   | Body  |
|:------------- |:------------- | :----- |
| Get User       | `localhost:8080/api/users/{id}`| - |
| Get Users      | `localhost:8080/api/users`     | - |
| Post User      | `localhost:8080/api/users`     |  `{  "name": "John", "surName": "Doe", "email": "john@yopmail.com", "birthDate": "01.01.1990" }` |
| Put User       |`localhost:8080/api/users/{id}` |  `{  "name": "Fatih", "surName": "Unlu", "email": "f@yopmail.com", "birthDate": "01.01.1990" }` |
| Delete User    |`localhost:8080/api/users/{id}` |  `{  "name": "Fatih", "surName": "Unlu", "email": "f@yopmail.com", "birthDate": "01.01.1990" }`  |

*<b>Note</b>: You need to set the body data as Json raw before you request Post and Put methods. To do so go Body tab on the Postman and choose Raw and select JSON format.*


