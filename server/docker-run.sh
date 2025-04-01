#!/bin/bash

# This script runs docker-compose with the correct environment file
# Usage: ./docker-run.sh [environment] [command]
# Example: ./docker-run.sh development up
# Example: ./docker-run.sh production up -d

ENV=${1:-development}
shift
CMD=${@:-up}

# Check if environment is valid
if [ ! -d "./docker/$ENV" ]; then
  echo "Error: Environment '$ENV' not found in ./docker/"
  echo "Available environments:"
  ls -1 ./docker/
  exit 1
fi

echo "Running docker-compose for $ENV environment..."
echo "Command: $CMD"

# Run docker-compose with the environment file from server root
cd ./docker/$ENV && docker-compose --env-file ../../.env $CMD 