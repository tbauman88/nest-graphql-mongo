# Build a GraphQL Server with NestJS and MongoDB

## Installation

```bash
$ npm install
```

## Running

This example `requires` docker.

## Docker

There is a `docker-compose.yml` file for starting Docker.

```bash
$ docker-compose up -d
```

After running the sample, you can stop the Docker container with

```bash
$ docker-compose down
``` 

## Then, run Nest as usual

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Open [http://localhost:3000/graphql](http://localhost:3000/graphql) to open GraphQL Playground.