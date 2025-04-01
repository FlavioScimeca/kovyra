FROM node:20-alpine

WORKDIR /app

# Install dependencies needed for testing
RUN apk add --no-cache python3 make g++ wget

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

# Set NODE_ENV to test
ENV NODE_ENV=test

# Command to run tests by default
CMD cd server && yarn test 