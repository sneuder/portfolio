# production
FROM node:16.20.1-alpine

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]
