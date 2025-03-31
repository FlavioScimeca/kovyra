# Kovyra Monorepo

A modern monorepo project built with NestJS, Next.js, and React Native, featuring a shared UI component library and theme system.

## Project Structure

```
kovyra/
├── apps/
│   ├── web/          # Next.js web application
│   └── mobile/       # React Native mobile application
├── packages/
│   ├── ui/           # Shared UI component library
│   ├── theme/        # Shared theme configuration
│   └── config/       # Shared configuration
└── server/           # NestJS backend application
```

## Technology Stack

### Backend (server/)

- NestJS (Node.js framework)
- TypeORM for database operations
- PostgreSQL database
- Docker support for development and production

### Web Application (apps/web/)

- Next.js 14
- React 18
- Tamagui for UI components
- TypeScript

### Mobile Application (apps/mobile/)

- Expo SDK
- React Native
- React Navigation
- Tamagui for UI components
- TypeScript

### Shared Packages

- `@kovyra/ui`: Shared UI component library built with Tamagui
- `@kovyra/theme`: Shared theme configuration
- `@kovyra/config`: Shared configuration utilities

## Getting Started

### Prerequisites

- Node.js (LTS version)
- Yarn
- Docker and Docker Compose (for development)
- PostgreSQL

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kovyra.git
cd kovyra
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp server/.env.example server/.env
```

### Development

1. Start the backend server:

```bash
cd server
yarn start:dev
```

2. Start the web application:

```bash
cd apps/web
yarn dev
```

3. Start the mobile application:

```bash
cd apps/mobile
yarn start
```

### Docker Development

You can also use Docker Compose for development:

```bash
docker-compose -f docker-compose.dev.yml up
```

## Project Features

- **Monorepo Structure**: Efficient code sharing between web, mobile, and backend
- **Type Safety**: Full TypeScript support across all packages
- **Shared UI**: Consistent design system using Tamagui
- **Docker Support**: Containerized development and production environments
- **Modern Stack**: Latest versions of React, Next.js, and NestJS
- **Cross-Platform**: Support for web and mobile platforms

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is private and proprietary. All rights reserved.
