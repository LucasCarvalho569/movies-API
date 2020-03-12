FROM node:13.8.0-alpine3.10
WORKDIR /var/www
EXPOSE 3000
COPY package.json .
RUN npm install
CMD ["npm", "start"]
