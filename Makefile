build:
	docker build . -t runaway-starwars

run:
	docker run -d -p 4532:3000 runaway-starwars

start: | build run
