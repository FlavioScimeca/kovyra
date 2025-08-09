# syntax=docker/dockerfile:1.4
# Use the official Bun image
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install development dependencies into temp directory
# This will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock bunfig.toml /temp/dev/
RUN cd /temp/dev && bun install

# Copy node_modules from temp directory
# Then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/dev/node_modules node_modules
COPY --from=prerelease /usr/src/app/package.json .
COPY --from=prerelease /usr/src/app/bunfig.toml .
COPY --from=prerelease /usr/src/app/tsconfig*.json ./
COPY --from=prerelease /usr/src/app/nest-cli.json .
COPY --from=prerelease /usr/src/app/server ./server

# Create dist directory with proper permissions and ensure bun user owns the entire workspace
RUN mkdir -p dist && chown -R bun:bun /usr/src/app

# Expose the port NestJS runs on
EXPOSE 4001

# Switch to bun user
USER bun

# Run the app
ENTRYPOINT ["bun", "run", "start:dev"] 