## Node: 3Ds Example (Docker, Database, Dependency Injection)

This is an example application that runs on Docker containers and uses a Postgres DB for data storage as well as Dependency Injection as a design pattern.

## Run the demo

Since we are using Docker Compose, simply run the following:

```
docker-compose up
```

This will start all the containers running. Note this starts up 3 services: the `NodeJS` Service, `Postgres` DB Service and `PGAdmin` Service.

## Migrate the database

Database migrations are managed using `knex` which is installed as a globally available command in the NodeJS container as defined in the [Dockerfile](./Dockerfile). This means you will need to connect to the containers terminal to run the `knex` migration command. This repo includes a [Makefile](./Makefile) which makes this easier so that you just need to run:

```
make db_migrate
```

...which will connect to the running `app` container and run the `knex` db bmigrations for you. Easy!

## Apply database seeds

Database seed data is managed using `knex`. The seed data for this project can be run using the following make command:

```
make db_seed
```

## Test the API

Use curl to test the API like so:

```
curl http://localhost:3000/dev/1
```

This will return the first seeded record that was added in the run seed step above.

To add a new record to the database via the api then use the following curl command:

```
curl -H "Content-Type: application/json" -d '{"email": "john@example.com", "firstName": "John", "middleNames": "Peters", "lastName": "Smith"}' -POST http://localhost:3000/dev/
```

The above record should be inserted with the next primary key id in the sequence and so should be accessible via:

```
curl http://localhost:3000/dev/2
```

## DB access using PGAdmin

Navigate your browser to [http://localhost:5050](http://localhost:5050) and use the password as specified in the [docker-compose.yml](./docker-compose.yml) file `pgadmin` service definiton.

## DB access using psql

There is a make command to connecto to the running `db` contianer which can then connect directly to the database using `psql`:

```
make psql_console
```

With the above command, you will be dropped directly into an authorized `psql` shell where you can run the usual commands and `SQL` to test out your database.

### Knex Migrations and Database Seeding

For more information on Knex Migrations and Database Seeding, please refer to [this article](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261) and [this article](https://www.heady.io/blog/knex-migration-for-schema-and-seeds-with-postgresql).