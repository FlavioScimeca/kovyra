# Kovyra Docker Environments

This directory contains Docker configurations for various environments:

## Available Environments

1. **Production** (`/production`) - For production deployment

   - Full multi-stage build optimization
   - Redis for caching
   - Nginx for SSL termination and load balancing
   - Non-root user for enhanced security
   - Resource limits for stability

2. **Staging** (`/staging`) - For pre-production testing

   - Similar to production but with debug capabilities
   - Includes monitoring with Prometheus and Grafana
   - Redis caching like production

3. **Development** (`/development`) - For development with hot-reloading

   - Code hot-reloading for fast development
   - PgAdmin for database management
   - Mailhog for email testing
   - Volume mounts for real-time code changes

4. **Testing** (`/testing`) - For running tests

   - Optimized for unit, integration, and E2E tests
   - Coverage reporting
   - In-memory database option with tmpfs

5. **Local** (`/local`) - Minimal setup for local development

   - Database-only setup that can be used with local Node.js
   - Adminer for lightweight database management
   - Mailhog for email testing

6. **CI** (`/ci`) - For continuous integration pipelines
   - Optimized for CI/CD pipelines
   - Runs linting, tests, and builds
   - Ephemeral database with tmpfs

## Usage Instructions

### Using the Docker Runner Script (Recommended)

We provide a convenient script to run any Docker environment with the correct .env file:

```bash
# Start development environment
cd server
./docker-run.sh development up

# Start production in detached mode
./docker-run.sh production up -d

# Stop staging environment
./docker-run.sh staging down

# Run tests
./docker-run.sh testing up api-test
```

### Manual Usage (Alternative)

If you prefer to run the environments manually:

```bash
cd server/docker/[environment]
docker-compose --env-file ../../.env up
```

## Environment Variables

All environments use the main .env file in the server directory. The docker-run.sh script handles passing the environment file to Docker Compose.

## Customization

Feel free to modify each configuration to suit your specific needs. The provided configurations serve as a solid baseline for each environment type.
