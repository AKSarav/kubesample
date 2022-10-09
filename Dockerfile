FROM node:18-alpine

WORKDIR /
RUN mkdir /app
COPY ./ ./app

WORKDIR /app
CMD ['node','index.js']