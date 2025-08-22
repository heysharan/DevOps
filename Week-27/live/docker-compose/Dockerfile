FROM node:22-alpine

WORKDIR /app

RUN corepack enable pnpm

COPY package* .

COPY pnpm* .

RUN pnpm install

COPY . .

RUN pnpx prisma generate

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "dev:docker" ]