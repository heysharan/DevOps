FROM node:22-alpine

WORKDIR /app

RUN corepack enable pnpm

COPY package* .

COPY pnpm* .

RUN pnpm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:mypassword123@localhost:5432/postgres

RUN pnpx prisma migrate dev

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "start" ]