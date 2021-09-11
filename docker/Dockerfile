FROM node:14.17.0 AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node","index.js"]
