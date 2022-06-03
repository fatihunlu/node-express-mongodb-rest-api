#  Simple Node with Express + MongoDB Rest Api

Simple Node with Express + MongoDB Rest Api

## Features

- Express
- REST API
- MongoDB

## Requirements

- [Install node & npm](https://nodejs.org/en/)

## Installation

- `npm install`
- `npm start`
- Start mongodb (suggest using docker instead installing mongo on ur machine)\
`docker run -d -p 27017:27017 --name test-mongo mongo:latest`


## Examples
- Install [Postman](https://www.postman.com/)
- to get users just hit `localhost:8080/api/users`
- to create a user use post method and add raw json body like\
`{
    "name": "John",
    "surName": "Doe",
    "email": "john@yopmail.com",
    "birthDate": "01.01.1990"
}`
<img width="687" alt="Screen Shot 2022-06-04 at 01 46 41" src="https://user-images.githubusercontent.com/13963254/171964041-38dd97f4-7271-4bc4-97f9-b56f80f639b7.png">



