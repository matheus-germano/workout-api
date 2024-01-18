FROM node:18

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

CMD ["pnpm", "run", "start:dev"]