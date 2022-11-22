FROM node:alpine

WORKDIR /app

ADD package.json package-lock.json ./
RUN npm install

ENV NODE_ENV=development

ADD .env ./.env

ADD tsconfig.json ./tsconfig.json

VOLUME [ "/app/src" ]

CMD ["npm","run","dev"]
