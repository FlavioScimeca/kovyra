FROM node:20-alpine

WORKDIR /app

# Install dependencies needed for CI
RUN apk add --no-cache python3 make g++ wget git

# Copy root workspace files
COPY package.json yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn

# Copy server package.json
COPY server/package.json ./server/

# Install dependencies
RUN yarn install

# Copy server source code and tests
COPY server/ ./server/

# Set NODE_ENV to ci
ENV NODE_ENV=ci
ENV CI=true

# Run linting, tests and build by default
CMD cd server && yarn lint && yarn test && yarn build 