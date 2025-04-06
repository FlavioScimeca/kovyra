# syntax=docker/dockerfile:1.4
FROM node:20-alpine

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install development dependencies (if needed by NestJS dev)
RUN apk add --no-cache git

WORKDIR /app

# Set PNPM_HOME for subsequent RUN commands
ENV PNPM_HOME=/home/node/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
# Ensure pnpm is activated in the PATH for RUN commands
RUN corepack enable

# Copy necessary package manager files and root source files
# Note: .dockerignore prevents apps/ and packages/ from being copied
COPY --chown=node:node package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc* tsconfig*.json nest-cli.json ./ ./ 
COPY --chown=node:node server/ ./server/

# Install ONLY root dependencies
RUN pnpm install --filter . 

# Ensure the node user owns the entire application directory after installs
RUN chown -R node:node /app

# Expose the port NestJS runs on (default 3000)
EXPOSE 3000

# Set user to non-root
USER node

# Start the NestJS application in watch mode
CMD ["pnpm", "run", "start:dev"] 