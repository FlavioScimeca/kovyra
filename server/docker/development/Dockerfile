FROM node:20-alpine

WORKDIR /app

# Install development dependencies
RUN apk add --no-cache python3 make g++ wget

# Copy root workspace files
COPY package.json yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn

# Copy server package.json
COPY server/package.json ./server/

# Install dependencies
RUN yarn install

# Expose port
EXPOSE 3000

# Set NODE_ENV to development
ENV NODE_ENV=development

# Start the application in development mode with nodemon
CMD cd server && yarn start:dev 