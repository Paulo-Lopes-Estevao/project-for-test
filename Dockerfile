FROM node:14-alpine

RUN mkdir /usr/test

WORKDIR /usr/test

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 8888

ENTRYPOINT [ "./runserver.sh" ] 