FROM node:alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD [ "npm","run","dev" ]

