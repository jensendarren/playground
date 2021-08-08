# Starts up a psql console in the db container
psql_console:
	docker exec -it db psql -U developer db_dev

# Run migrations against the database
db_migrate:
	docker-compose run --entrypoint "knex migrate:latest" app db

db_seed:
	docker-compose run --entrypoint "knex seed:run" app db