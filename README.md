# Pega A Visão

![demonstration](https://cdn.discordapp.com/attachments/836348442409828385/843572877185253425/unknown.png)

## Table of Contents

<!--ts-->

- [About](#about)
- [Requirements](#requirements)
- [How to use](#how-to-use)
  - [Setting up Frontend](#frontend-setup)
  - [Setting up Backend](#backend-setup)
- [Technologies](#technologies)
<!--te-->

## About

About the project

## Requirements

To run this repository by yourself you will need to install node.js, docker and docker-compose in your machine and them install all the projects requirements. We will show how to do it in the next step.

## How to use

### Frontend Setup

```bash
# Clone the frontend repository
$ git clone <https://github.com/CorchoForce/pav-front>

# Access the frontend directory
$ cd pav-front/

#Install all the requirements
$ npm ci

# Create a .env file
$ touch .env

# Add the following parameters to the created .env file
 REACT_APP_API_URL #The backend url

#Build the react app
$ npm start

#Them the app will be running in the http://localhost:3000
```

![demonstration](https://cdn.discordapp.com/attachments/836348442409828385/843592891661811742/unknown.png)

### Backend Setup

```bash
# Clone the backend repository
$ git clone <https://github.com/CorchoForce/pav-back>

# Access the backend directory
$ cd pav-back/

# Create a .env file
$ touch .env

# Add the following parameters to the created .env file
 SERVER_PORT=8080 #Backend running port
 URL=localhost #Backend url
 PRODUCTION=FALSE #If it's running in production mode or not
 FRONT_URL=any #The frontend production url
 MONGO_USERNAME=root #Mongo username
 MONGO_PASSWORD=123 #Mongo password
 MONGO_PORT=27017 # Mongo port
 MONGO_DB=sharkinfo #Mongo database
 MONGO_HOSTNAME=127.0.0.1 #Mongo hostname

#Run the docker-compose file
$ docker-compose up

#The api will be running in the port 27017
```

![demonstration](https://cdn.discordapp.com/attachments/836348442409828385/843592277590802442/unknown.png)

## Technologies

- React
- Express.js
- Docker
- Heroku
