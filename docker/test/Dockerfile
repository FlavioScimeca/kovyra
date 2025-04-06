FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install development dependencies
RUN apk add --no-cache git

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

# Install dependencies including dev dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Set test environment
ENV NODE_ENV=test

# Run tests
CMD ["pnpm", "test"] 