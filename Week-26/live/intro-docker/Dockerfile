# Base image to start from — this pulls a slimmed-down Node.js LTS image
FROM node:lts-slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy all files from the current directory on host to the /app directory in container
COPY . .

# RUN commands execute while building the image

# Enable pnpm (via Corepack)
RUN corepack enable pnpm

# Install all dependencies using pnpm
RUN pnpm install

# Build the project (converts TS to JS)
RUN pnpm run build

# Expose port 3000 — the port your app listens to inside the container
EXPOSE 3000

# CMD defines the default command to run when the container starts
# Here, we're starting the Node.js app from the built code
CMD ["node", "dist/index.js"]

# Notes:
# - A Dockerfile can have multiple RUN commands (executed during image build).
# - A Dockerfile should only have one CMD (executed when the container runs).
