# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root workspace files
COPY package.json yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn

# Copy server package.json
COPY server/package.json ./server/

# Install dependencies
RUN yarn install

# Copy server source code
COPY server/ ./server/

# Build application
RUN cd server && yarn build

# Staging stage
FROM node:20-alpine

# Create non-root user but keep it commented for debugging
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy root workspace files
COPY package.json yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn

# Copy server package.json
COPY server/package.json ./server/

# Install dependencies (not only production for debugging)
RUN yarn install

# Copy built application from builder stage
COPY --from=builder /app/server/dist ./server/dist

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Set NODE_ENV to staging
ENV NODE_ENV=staging

# Start the application
CMD ["node", "server/dist/main"] 