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
$ cd backend
$ docker-compose up
```

run NestJs
```bash
$ npm run start
```

After running backend, you need to init database:
```bash
$ npm run db:init
```

Now, you could check backend http://localhost:3000/version, or see Swagger documentation http://localhost:3000/swagger

More information see [backend](/backend) folder or https://nodejs.org/

## Frontend
### Installation

```bash
$ cd frontend
$ npm install
```

### Run
```bash
$ npm run start
```
Open your browser on http://localhost:4200/ 
