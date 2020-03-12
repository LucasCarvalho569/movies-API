docker stop $(docker ps -a -q) && 
docker-compose up --build -d &&
docker-compose -f ./users-service/docker-compose.yml up --build -d && 
docker-compose -f ./movies-service/docker-compose.yml up --build -d && 
docker-compose -f ./logs-service/docker-compose.yml up --build