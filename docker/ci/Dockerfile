# Build stage
FROM node:20-alpine AS builder

# Install pnpm and necessary tools
RUN corepack enable && corepack prepare pnpm@latest --activate && \
    apk add --no-cache git

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build all applications
RUN pnpm build

# Test stage
FROM node:20-alpine AS test

# Install pnpm and necessary tools
RUN corepack enable && corepack prepare pnpm@latest --activate && \
    apk add --no-cache git

WORKDIR /app

# Copy package files and dependencies
COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml /app/.npmrc ./
COPY --from=builder /app/node_modules ./node_modules

# Copy built applications
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/apps ./apps
COPY --from=builder /app/packages ./packages

# Set CI environment
ENV NODE_ENV=ci
ENV CI=true

# Run all tests and checks
CMD ["sh", "-c", "pnpm lint && pnpm test && pnpm test:cov"] 