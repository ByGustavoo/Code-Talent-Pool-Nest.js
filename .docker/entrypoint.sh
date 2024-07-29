#!/bin/bash 

# Instalar dependências, construir e executar migrações
npm install

npm run build

npm run migration:run

# Iniciar a aplicação
npm run start
