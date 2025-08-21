## Manual Installation
 - Install nodejs and pnpm locally
 - Clone the repo
 - Install dependencies (pnpm install)
 - Start the DB locally
    - `docker run -e POSTGRES_PASSWORD=mypassword123 -d -p 5432:5432 postgres`  (or) 
    - Go to neon.tech and a new DB
 - Create a new .env file and add your DATABASE_URL
 - pnpx prisma migrate dev
 - pnpm run dev

## Docker Installation
 - Install docker
 - Clone the repo
 - Start DB locally (postgres)
    - docker run -e POSTGRES_PASSWORD=mypassword123 -d -p 5432:5432 postgres
 - Build the image - `docker build -t user_app .`
 - Start a container - `docker run -p 3000:3000 user_app`


## Docker Compose Installation Steps
 - Install docker, docker-compose
 - Run `docker-compose up`
