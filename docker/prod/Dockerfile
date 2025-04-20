# syntax=docker/dockerfile:1.4

# Builder stage
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install build dependencies
RUN apk add --no-cache git

WORKDIR /app

# Set PNPM_HOME for subsequent RUN commands
ENV PNPM_HOME=/home/node/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
# Ensure pnpm is activated in the PATH for RUN commands
RUN corepack enable

# Copy necessary package manager files and root source files
COPY --chown=node:node package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc* tsconfig*.json nest-cli.json ./ ./
COPY --chown=node:node server/ ./server/

# Install dependencies
RUN pnpm install --filter .

# Build the application
RUN pnpm run build

# Production stage
FROM node:20-alpine AS production

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Set PNPM_HOME for subsequent RUN commands
ENV PNPM_HOME=/home/node/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV NODE_ENV=production

# Create non-root user to run the app
RUN corepack enable

# Copy package files
COPY --chown=node:node package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc* ./

# Copy built app from builder stage
COPY --chown=node:node --from=builder /app/dist ./dist

# Install production dependencies only
RUN pnpm install --filter . --prod

# Ensure the node user owns the entire application directory
RUN chown -R node:node /app

# Expose the port the app runs on
EXPOSE 4001

# Set user to non-root
USER node

# Start the application
CMD ["node", "dist/main"] 