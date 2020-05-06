# Impressit test assignment README

## Overview

This is NodeJS app using Serverless + Express + DynamoDB

## Development

0. Install serverless in case you haven't done it previously. You can do it via execution of `npm install -g serverless`. NOTE: Make sure you have NodeJS instaleed on your system

1. Clone this repo usin `git clone https://github.com/DeadAstro23/impressit_test_assignment` and change directory to coppied folder `cd impressit_test_assignment`.

2. For building up project run `npm run build`. This command is going to install all required dependencies.

3. For running service locally use `npm run start`. This command will synchronously start serverless app and dynamodb local instance.

## Linting

For running ESLint you may simply execute `npm run eslint` command
In case you want make automatic fixes feel free to use `npm run eslint-fix`.

## Unit tests

Unit tests are based on JEST test&assertions library and may be triggered by hitting `npm run test` command.

## API Usage

- Add Book (POST)

```
curl --location --request POST 'http://localhost:3000/dev/api/v1/book' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Book Name",
  "releaseDate" : 2020,
  "authorName": "Name"
}'
```

- Get Book by ID (GET)

```
curl --location --request GET 'http://localhost:3000/dev/api/v1/book/436fe4c0-8f9f-11ea-b76d-f1583c95cbef'
```

- Get All Books (GET)

```
curl --location --request GET 'http://localhost:3000/dev/api/v1/books'
```

- Update Book by ID (PUT)

```
curl --location --request PUT 'http://localhost:3000/dev/api/v1/book/436fe4c0-8f9f-11ea-b76d-f1583c95cbef' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Book Updated",
    "releaseDate": "2020",
    "authorName": "Me"
}'
```

- Delete Book by ID (DELETE)

```
curl --location --request DELETE 'http://localhost:3000/dev/api/v1/book/436fe4c0-8f9f-11ea-b76d-f1583c95cbef'
```

## TODO
1. Wire up Swagger Docs (opeapi specs already added but need to figure out how to make it available on front-end)
2. Enhance project build via Docker
