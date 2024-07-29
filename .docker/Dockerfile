FROM node:20.11.0

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

# Tornando o script de entrada executável
RUN chmod +x .docker/entrypoint.sh

# Definindo o Script de entrada como o ponto de entrada
ENTRYPOINT [ "sh", "/app/.docker/entrypoint.sh" ]
