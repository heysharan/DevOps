FROM node:22-alpine

WORKDIR /app

RUN corepack enable pnpm

COPY package* .

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]