up: 
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

mongo: 
	docker exec -it mongodb mongo

redis:
	docker exec -it redis redis-cli