FROM node:20-alpine

# Install bun and development dependencies
RUN curl -fsSL https://bun.sh/install | bash && \
    apk add --no-cache git
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

# Copy package files
COPY package.json bun.lockb bunfig.toml ./

# Install dependencies including dev dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Set test environment
ENV NODE_ENV=test

# Run tests
CMD ["bun", "test"] 