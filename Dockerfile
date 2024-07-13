FROM node:latest

WORKDIR /app

COPY . .
COPY ./.env ./

RUN npm install 

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]

