# Build stage
FROM node:20-alpine AS builder

# Install bun and necessary tools
RUN curl -fsSL https://bun.sh/install | bash && \
    apk add --no-cache git
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

# Copy package files
COPY package.json bun.lockb bunfig.toml ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build all applications
RUN bun run build

# Test stage
FROM node:20-alpine AS test

# Install bun and necessary tools
RUN curl -fsSL https://bun.sh/install | bash && \
    apk add --no-cache git
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

# Copy package files and dependencies
COPY --from=builder /app/package.json /app/bun.lockb /app/bunfig.toml ./
COPY --from=builder /app/node_modules ./node_modules

# Copy built applications
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/apps ./apps
COPY --from=builder /app/packages ./packages

# Set CI environment
ENV NODE_ENV=ci
ENV CI=true

# Run all tests and checks
CMD ["sh", "-c", "bun run lint && bun run test && bun run test:cov"] 