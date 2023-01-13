FROM node:16

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/frontend
RUN npm i
RUN npm run build

WORKDIR /usr/src/app
RUN npm i
RUN npm run build

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "start:prod" ]