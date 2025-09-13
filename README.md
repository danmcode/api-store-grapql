# Install

```sh
npm install
```

# Migrations

```sh
npm run migrations:run
```

# Run in dev mode

```sh
npm run dev
```

# Run in prod mode

```sh
npm run start
```

# Connect to DB from Docker

```sh
docker-compose exec postgres bash
psql -h localhost -d <database> -U <user>
\d+
SELECT * FROM users;
DELETE FROM users WHERE id=<id>;
```

# GraphQL

store_graphql
npm i apollo-server-express --save
