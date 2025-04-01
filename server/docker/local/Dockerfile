FROM node:20-alpine

WORKDIR /app

# Install development dependencies
RUN apk add --no-cache python3 make g++ wget

# Set NODE_ENV to local
ENV NODE_ENV=local

# Expose port
EXPOSE 3000

# Simply start a shell by default
CMD ["/bin/sh"] 