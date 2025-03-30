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

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy root workspace files
COPY package.json yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn

# Copy server package.json
COPY server/package.json ./server/

# Install production dependencies only
RUN yarn install --mode=production

# Copy built application from builder stage
COPY --from=builder /app/server/dist ./server/dist

# Expose port
EXPOSE 3000

# Start the application
CMD ["cd", "server", "&&", "yarn", "start:prod"] 