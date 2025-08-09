# syntax=docker/dockerfile:1.4

# Builder stage
FROM node:20-alpine AS builder

# Install bun and build dependencies
RUN curl -fsSL https://bun.sh/install | bash && \
    apk add --no-cache git
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

# Copy necessary package manager files and root source files
COPY --chown=node:node package.json bun.lockb bunfig.toml tsconfig*.json nest-cli.json ./ ./
COPY --chown=node:node server/ ./server/

# Install dependencies
RUN bun install

# Build the application
RUN bun run build

# Production stage
FROM node:20-alpine AS production

# Install bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Set working directory
WORKDIR /app

ENV NODE_ENV=production

# Copy package files
COPY --chown=node:node package.json bun.lockb bunfig.toml ./

# Copy built app from builder stage
COPY --chown=node:node --from=builder /app/dist ./dist

# Install production dependencies only
RUN bun install --production

# Ensure the node user owns the entire application directory
RUN chown -R node:node /app

# Install bun for the node user
USER node
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/home/node/.bun/bin:$PATH"

# Expose the port the app runs on
EXPOSE 4001

# Start the application
CMD ["node", "dist/main"] 