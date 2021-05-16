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

#Build the react app with build configuration
$ npm run build

# Install the serve
$ yarn global add serve

# Run the built application
$ serve -s build

#Them the app will be running in the http://localhost:5000
```

![demonstration](https://cdn.discordapp.com/attachments/836348442409828385/843574626859614229/unknown.png)

### Backend Setup

```bash
# Clone the backend repository
$ git clone <https://github.com/CorchoForce/pav-back>

# Access the backend directory
$ cd pav-back/

# Create a .env file
$ touch .env

# Add the following parameters to the created .env file
 SERVER_PORT=8080
 URL=localhost
 PRODUCTION=FALSE
 FRONT_URL=asdadsad
 MONGO_USERNAME=root
 MONGO_PASSWORD=123
 MONGO_PORT=27017
 MONGO_DB=sharkinfo
 MONGO_HOSTNAME=127.0.0.1

#Run the docker-compose file
$ docker-compose up
```

![demonstration]()

## Technologies

- React
- Express.js
- Docker
- Heroku
