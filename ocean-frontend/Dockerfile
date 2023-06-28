FROM node:lts-alpine

WORKDIR /app

RUN npm update

RUN npm install -g pnpm

RUN npm install -g http-server

COPY package*.json ./

RUN pnpm install esbuild@0.17.16

RUN pnpm install

COPY . .

RUN pnpm run build

CMD [ "http-server", "dist" ]