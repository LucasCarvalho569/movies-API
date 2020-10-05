docker container ls -aq | xargs --no-run-if-empty docker stop $(docker ps -a -q) && 
docker-compose up --build -d &&
docker-compose -f ./users-service/docker-compose.yml --env-file ./users-service/.env up --build -d && 
docker-compose -f ./movies-service/docker-compose.yml --env-file ./movies-service/.env up --build -d && 
docker-compose -f ./logs-service/docker-compose.yml --env-file ./logs-service/.env up --build -d &&
cd ./users-service && npx sequelize-cli db:migrate &&
cd ../movies-service && npx sequelize-cli db:migrate

$SHELL