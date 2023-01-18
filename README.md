<h1 align="center">GLOW UP</h1>

**GLOWUP Server** contains server for fundamental functions.

## Installation

```bash
$ npm install
```

## Installation Prisma CLI

The Prisma CLI is typically installed as a development dependency, that's why the --save-dev (npm) and --dev (Yarn) options are used in the commands below.

**npm**
Install with npm:

```bash
npm install prisma --save-dev
```

This should add prisma to the devDependencies in your package.json. You can then invoke the locally installed CLI with the prisma command prefixed with npx:

```bash
npx prisma
```

Here's an example for invoking the generate command:

```bash
npx prisma generate
```

**Yarn (1.19.2+)**
Install with Yarn:

```bash
yarn add prisma --dev
```
This should add prisma to the devDependencies in your package.json. You can then invoke the locally installed CLI with the prisma command prefixed with yarn:

```bash
yarn prisma
```
Here's an example for invoking the generate command:

```bash
yarn prisma generate
```

## Running the app

```bash
# development
$ docker-compose up # for running the database
$ npx prisma studio # to view and edit the data in your database
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Run Docker file

```bash
docker-compose up
# or detached
docker-compose up -d
```
You should have the following two docker containers started
![image](https://user-images.githubusercontent.com/78846812/213292710-5e913928-8a8b-49d7-9b3a-0b773eb62feb.png)

Open again localhost:3000 to verify that your Nest app is running with Docker. Also verify that your endpoints using the Prisma Client have access to the Postgres DB.

## Sandbox GraphQL
Go to https://studio.apollographql.com/sandbox/explorer

![image](https://user-images.githubusercontent.com/78846812/213294698-c34e6e6d-ad96-45bf-b87a-f45d29569933.png)

You can test the api for the server here. **Remember to get the server running before go to the sandbox**. You can see the green light on the left corner means the server is connected with sandbox.

![image](https://user-images.githubusercontent.com/78846812/213295080-51a0a335-c78a-4d96-a072-5dfc43e1d922.png)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
