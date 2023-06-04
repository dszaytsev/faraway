build:
	docker build . -t runaway-starwars

run:
	docker run -d -p 3050:3000 runaway-starwars

start: | build run
