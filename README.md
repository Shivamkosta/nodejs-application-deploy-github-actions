<!-- RUN THE DOCKER COMPOSE YML FILE -->
docker compose up -d

<!-- Run the dockerfile -->
docker run -it --rm -p 3000:3000 api

<!-- for build the docker image -->
docker build -t api .

<!-- for run the application on docker using curl -->
curl http://localhost:3000

<!-- for create gitignore file -->
npx gitignore node