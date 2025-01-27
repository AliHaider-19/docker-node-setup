FROM node:18

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 3010

RUN npm install

CMD [ "node","index.js" ]