FROM node:lts-slim

WORKDIR /app

RUN corepack enable pnpm

COPY package* .

COPY pnpm* .

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]







