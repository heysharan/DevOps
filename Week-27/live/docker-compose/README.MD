## Manual Installation
 - Install nodejs and pnpm locally
 - Clone the repo
 - Install dependencies (pnpm install)
 - Start the DB locally
    - docker run -e POSTGRES_PASSWORD=mypassword123 -d -p 5432:5432 postgres
    - Go to neon.tech and a new DB
 - Create a new .env file and add your DATABASE_URL
 - pnpx prisma migrate dev
 - pnpm run dev

## Docker Installation