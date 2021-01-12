# Notion
Web - Full-Stack Nest + Angular Test Assignment

## Assignment
### Overview
The goal is to create a simple web application which makes a request to an API, parses the response, and displays the result in the UI. The app will consist of two modules - one home entry module that contains a root index page and one **lazy loaded** detail module.

### Problem
The app should consist of **two** screens:

A **Home** screen containing two elements

- Text field for entering an 'Id' Integer Value
- 'Send' Button for initiating the request to a local API endpoint *`http://localhost:3000/posts/{id}`*

A Lazy-loading **Details** screen containing three elements

- Back button/link for returning to the first screen
- Title for displaying the 'title' text of the JSON response
- Text field (non-editable) for displaying the 'body' text of the JSON response

### UI
The UI should appear modern and simple while following best practices around HTML + CSS/SCSS. Creativity is encouraged, so feel free design the UI in any way you wish. However, the app must be functionally complete.

### Use-Case
- After the app is launched, the **Home** screen is displayed
- The user enters a random Integer value into to the 'Id' field and taps the `Send` button
- The app sends a https request to *`http://localhost:3000/posts/{id}`* , where {id} is the integer value entered by the user. 
NOTE: The complete Posts Data can be found at the bottom of this evaluation and should be accessible from the *`http://localhost:3000/posts/` endpoint*
- The app then parses the response from the server. If both the 'title' and 'body' fields exists, the **Details** screen should open and display the corresponding values. If either of the fields are *null*/empty/absent, an error message should be displayed on the **Home** screen.

### Requirements
- The app has to compile and run without issue. It should be stable and reasonably fool-proof, handling all obvious test cases.

### Deliverables
The final deliverable should be a fully-functioning Angular + NestJS project that compiles and runs locally. A public GitHub repository is the preferred delivery method.

### Posts Data
```$js
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
```

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
