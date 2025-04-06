#!/usr/bin/env node
import chalk from 'chalk'; // Import chalk
import { execSync, spawn } from 'child_process';
import inquirer from 'inquirer';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Configuration ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const DOCKER_COMMAND = 'docker-compose'; // Use space - preferred in newer Docker versions
const USE_BUILDKIT = true;

const environments = {
  development: {
    name: 'Development (Default)',
    path: 'docker/dev',
    composeFlagsUp: [],
    isDetached: false,
    default: true,
  },
  ci: {
    name: 'CI/CD Pipeline',
    path: 'docker/ci',
    composeFlagsUp: ['--abort-on-container-exit'],
    isDetached: false,
  },
  staging: {
    name: 'Staging',
    path: 'docker/staging',
    composeFlagsUp: ['-d'],
    isDetached: true,
  },
  test: {
    name: 'Testing',
    path: 'docker/test',
    composeFlagsUp: ['--abort-on-container-exit'],
    isDetached: false,
  },
  production: {
    name: 'Production (Disabled)',
    path: 'docker/prod',
    composeFlagsUp: ['-d'],
    isDetached: true,
    disabled: true,
  },
};
// --- End Configuration ---

// Helper function to check if a command exists
function commandExists(command) {
  try {
    execSync(`command -v ${command} >/dev/null 2>&1`);
    return true;
  } catch (e) {
    return false;
  }
}

// Helper function to run command with better feedback
async function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const fullCommand = `${command} ${args.join(' ')}`;
    console.log(
      chalk.cyan(`> Running in ${cwd}: `) + chalk.yellow(fullCommand),
    );

    const child = spawn(command, args, {
      cwd: cwd,
      stdio: 'inherit', // Inherit stdin, stdout, stderr
      env: {
        ...process.env, // Pass existing env vars
        ...(USE_BUILDKIT && { DOCKER_BUILDKIT: '1' }), // Conditionally add DOCKER_BUILDKIT
      },
    });

    child.on('error', (err) => {
      console.error(chalk.red(`\nError spawning command: ${err.message}`));
      reject(err);
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(chalk.green('\nCommand completed successfully.'));
        resolve();
      } else {
        console.error(chalk.red(`\nCommand failed with exit code: ${code}`));
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });
}

async function main() {
  // Check dependencies
  if (!commandExists(DOCKER_COMMAND)) {
    console.error(
      chalk.red(
        `Error: '${DOCKER_COMMAND}' command not found. Please ensure Docker and Docker Compose are installed and in your PATH.`,
      ),
    );
    process.exit(1);
  }

  // --- Get User Input ---
  const choices = Object.entries(environments).map(([key, env]) => ({
    name: env.disabled ? chalk.gray(env.name) : env.name, // Gray out disabled
    value: key,
    disabled: env.disabled ? '(Disabled for local execution)' : false,
  }));

  const defaultChoice = Object.keys(environments).find(
    (key) => environments[key].default,
  );

  const { environment } = await inquirer.prompt([
    {
      type: 'list',
      name: 'environment',
      message: 'Select Docker environment:',
      choices: choices,
      default: defaultChoice,
    },
  ]);

  const selectedEnv = environments[environment];
  if (selectedEnv.disabled) {
    console.log(chalk.yellow(`Environment "${selectedEnv.name}" is disabled.`));
    return;
  }

  const actions = [
    { name: 'Up (Start/Create)', value: 'up' },
    { name: 'Down (Stop/Remove)', value: 'down' },
    {
      name: 'Remove Containers (Force stop & remove for this env)',
      value: 'rm',
    },
  ];
  if (selectedEnv.isDetached) {
    actions.push({ name: 'Logs (Follow output)', value: 'logs' });
  }
  actions.push({
    name: chalk.red('Prune System (Remove ALL unused Docker data globally)'),
    value: 'prune',
  });

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Select action:',
      choices: actions,
      default: 'up',
    },
  ]);

  let commandArgs = [];
  let rebuild = false;
  let requiresEnvPath = true;
  let requiresConfirmation = false;
  let confirmationMessage = '';

  if (action === 'up') {
    const { rebuild: shouldRebuild } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'rebuild',
        message: chalk.yellow(
          'Force rebuild image? (Recommended on first run or after changes)',
        ),
        default: false,
      },
    ]);
    rebuild = shouldRebuild;
    commandArgs.push('up');
    if (rebuild) {
      commandArgs.push('--build');
    }
    commandArgs.push(...selectedEnv.composeFlagsUp);
  } else if (action === 'down') {
    commandArgs.push('down', '--volumes');
  } else if (action === 'rm') {
    commandArgs.push('rm', '-fsv');
  } else if (action === 'prune') {
    requiresEnvPath = false;
    commandArgs.push('system', 'prune', '-af', '--volumes');
    requiresConfirmation = true;
    confirmationMessage = chalk.red.bold(
      'DANGER! This will remove ALL unused containers, networks, images (dangling and unreferenced), build cache, and volumes globally. Are you sure?',
    );
  } else if (action === 'logs') {
    commandArgs.push('logs', '-f');
  }

  if (requiresConfirmation) {
    const { confirmed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmed',
        message: confirmationMessage,
        default: false,
      },
    ]);
    if (!confirmed) {
      console.log(chalk.yellow('Operation cancelled.'));
      return;
    }
  }

  const executionCwd = requiresEnvPath
    ? path.join(projectRoot, selectedEnv.path)
    : projectRoot;

  console.log(chalk.blue('\n-- Configuration --'));
  console.log(chalk.blue(`Environment: ${selectedEnv.name}`));
  console.log(
    chalk.blue(`Action:      ${action}${rebuild ? ' (with rebuild)' : ''}`),
  );
  console.log(chalk.blue(`Directory:   ${executionCwd}`));
  console.log(chalk.blue('-------------------\n'));

  try {
    const commandToRun = action === 'prune' ? 'docker' : DOCKER_COMMAND;
    await runCommand(commandToRun, commandArgs, executionCwd);
  } catch (error) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(chalk.red('\nAn unexpected error occurred:'), err);
  process.exit(1);
});

/** @type {import('chalk')} */
