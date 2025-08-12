#!/usr/bin/env node
import chalk from 'chalk';
import { execSync, spawn } from 'child_process';
import inquirer from 'inquirer';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Configuration ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Commands that can be executed directly inside the container
const predefinedCommands = [
  {
    name: 'Interactive Shell',
    value: 'shell',
    command: 'sh',
    description: 'Enter an interactive shell in the container',
  },
  {
    name: 'Generate GraphQL Schema',
    value: 'graphql-schema',
    command: 'cd /app && pnpm run graphql:generate',
    description: 'Generate GraphQL schema without starting the app',
  },
  {
    name: 'Run Database Migrations',
    value: 'run-migrations',
    command: 'cd /app && pnpm run migration:run',
    description: 'Run pending database migrations',
  },
  {
    name: 'Create New Migration',
    value: 'create-migration',
    command: null, // Will be handled specially with additional prompt
    description: 'Generate a new migration from entity changes',
  },
  {
    name: 'Revert Last Migration',
    value: 'revert-migration',
    command: 'cd /app && pnpm run migration:revert',
    description: 'Revert the most recent migration',
  },
  {
    name: 'Custom Command',
    value: 'custom',
    command: null, // Will be handled with additional prompt
    description: 'Run a custom command inside the container',
  },
];

// Helper function to execute commands and display output
function execCommand(command) {
  try {
    console.log(chalk.cyan(`Executing: ${command}`));
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(chalk.red(`Error executing command: ${error.message}`));
    return null;
  }
}

// Get list of running containers related to the project
function getRunningContainers() {
  try {
    const result = execSync('docker ps --format "{{.ID}}|{{.Names}}|{{.Image}}"', {
      encoding: 'utf8',
    });
    const containers = result
      .trim()
      .split('\n')
      .filter(line => line.includes('kovyra') || line.toLowerCase().includes('app'))
      .map(line => {
        const [id, name, image] = line.split('|');
        return {
          id,
          name,
          image,
          value: id,
          display: `${name} (${id.substring(0, 12)}) - ${image}`,
        };
      });

    return containers;
  } catch (error) {
    console.error(chalk.red(`Error fetching containers: ${error.message}`));
    return [];
  }
}

async function main() {
  console.log(chalk.green('=== Kovyra Docker Container Executor ==='));

  // Get running containers
  const containers = getRunningContainers();

  if (containers.length === 0) {
    console.error(
      chalk.red('No running containers found. Please start your Docker containers first.')
    );
    console.log(chalk.yellow('You can start containers with: pnpm run docker'));
    process.exit(1);
  }

  // Format the container choices with better display names
  const containerChoices = containers.map(container => ({
    name: container.display,
    value: container.id,
    short: container.name,
  }));

  // Ask which container to use
  const { containerId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'containerId',
      message: 'Select a running container:',
      choices: containerChoices,
    },
  ]);

  // Find the selected container
  const selectedContainer = containers.find(c => c.id === containerId);
  console.log(chalk.blue(`Selected container: ${selectedContainer.name}`));

  // Ask what action to take
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: predefinedCommands.map(cmd => ({
        name: `${cmd.name} - ${cmd.description}`,
        value: cmd.value,
      })),
    },
  ]);

  // Handle the selected action
  const selectedAction = predefinedCommands.find(cmd => cmd.value === action);

  if (action === 'custom') {
    // Handle custom command
    const { customCommand } = await inquirer.prompt([
      {
        type: 'input',
        name: 'customCommand',
        message: 'Enter your custom command to run inside the container:',
        validate: input => (input.trim() !== '' ? true : 'Command cannot be empty'),
      },
    ]);

    execCommand(`docker exec -it ${containerId} sh -c "${customCommand}"`);
  } else if (action === 'create-migration') {
    // Handle migration name prompt
    const { migrationName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'migrationName',
        message: 'Enter a name for the new migration:',
        validate: input => {
          if (input.trim() === '') return 'Migration name cannot be empty';
          if (!/^[a-zA-Z0-9_-]+$/.test(input))
            return 'Migration name should only contain letters, numbers, underscores and hyphens';
          return true;
        },
      },
    ]);

    execCommand(
      `docker exec -it ${containerId} sh -c "cd /app && pnpm run migration:generate server/migrations/${migrationName}"`
    );
  } else if (action === 'shell') {
    // Special handling for shell to keep it interactive
    const child = spawn('docker', ['exec', '-it', containerId, 'sh'], {
      stdio: 'inherit',
    });

    child.on('close', code => {
      console.log(chalk.green(`\nExited shell with code ${code}`));
    });
  } else if (selectedAction.command) {
    // Execute the predefined command
    execCommand(`docker exec -it ${containerId} sh -c "${selectedAction.command}"`);
  }
}

// Execute the script
main().catch(error => {
  console.error(chalk.red(`Error: ${error.message}`));
  process.exit(1);
});
