FROM node:14-alpine

RUN mkdir /usr/test

WORKDIR /usr/test

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8888

CMD [ "npm", "run", "dev" ]