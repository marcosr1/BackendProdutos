FROM node:20-alpine

WORKDIR /app

# Dependências
COPY package*.json ./
RUN npm install

# Código
COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]