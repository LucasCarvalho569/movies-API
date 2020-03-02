docker stop $(docker ps -a -q) && 
docker-compose -f ./users-service/docker-compose.yml up -d && 
docker-compose -f ./movies-service/docker-compose.yml up -d && 
docker-compose -f ./logs-service/docker-compose.yml up