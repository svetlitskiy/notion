# Notion
Web - Full-Stack Nest + Angular Test Assignment

## Requirements 
 - [NodeJs](https://nodejs.org/) = 12.x
 - [Docker](https://www.docker.com/) >= 17.x
 - [docker-compose](https://docs.docker.com/compose/install/)

    
## Backend
### Installation

```bash
$ cd backend
$ npm install
```
### Run

run PostgreSQL
```bash
$ docker-compose up #run in the root folder
```
By default, [docker-compose.yaml](/docker-compose.yaml) configurated for Linux OS, if you have windows, please change volumes path in [docker-compose.yaml](/docker-compose.yaml)

run NestJs in another terminal
```bash
$ cd backend
$ npm run start
```

After running backend, you need to init database (Please, make sure that NestJs and Postgres already run)
```bash
$ cd backend
$ npm run db:init
```

Now, you could check backend http://localhost:3000/version, or see Swagger documentation http://localhost:3000/swagger

See more information in [backend folder](/backend) or https://nodejs.org/

## Frontend
### Installation

```bash
$ cd frontend
$ npm install
```

### Run
```bash
$ npm start
```
Open your browser on http://localhost:4200/ 
