#!/bin/sh

# Exit on error
set -e

# Load environment variables
if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

# Function to run migrations
run_migrations() {
  echo "Running database migrations..."
  yarn prisma migrate deploy
  echo "Migrations completed successfully!"
}

# Function to generate Prisma client
generate_client() {
  echo "Generating Prisma client..."
  yarn prisma generate
  echo "Prisma client generated successfully!"
}

# Function to reset database
reset_database() {
  echo "Resetting database..."
  yarn prisma migrate reset --force
  echo "Database reset completed!"
}

# Function to show help
show_help() {
  echo "Usage: ./db-migrate.sh [command]"
  echo ""
  echo "Commands:"
  echo "  migrate    Run database migrations"
  echo "  generate   Generate Prisma client"
  echo "  reset      Reset database (warning: this will delete all data)"
  echo "  help       Show this help message"
}

# Main script
case "$1" in
  "migrate")
    run_migrations
    ;;
  "generate")
    generate_client
    ;;
  "reset")
    reset_database
    ;;
  "help"|"")
    show_help
    ;;
  *)
    echo "Unknown command: $1"
    show_help
    exit 1
    ;;
esac 