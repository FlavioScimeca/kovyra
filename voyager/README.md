# GraphQL Voyager

This directory contains a standalone implementation of GraphQL Voyager for our GraphQL API.

## What is GraphQL Voyager?

GraphQL Voyager is a tool that displays your GraphQL API as an interactive graph. It allows you to:

- Visualize your schema as a graph
- Navigate through your types and their relationships
- Find out which types are connected and how
- Understand your API structure at a glance

## How to Access

First, start your main GraphQL server at port 4001:

```bash
# From the root directory
cd server
pnpm run start:dev
```

Then, in a separate terminal, run the Voyager server:

```bash
# From the root directory
pnpm run voyager
```

You can then access GraphQL Voyager at:

```
http://localhost:4002
```

## Troubleshooting

If you see an endless "Loading..." state:

1. **Check if your GraphQL server is running**: Make sure your main server is running on port 4001
2. **Check terminal output**: Look for any error messages in the Voyager server terminal
3. **CORS issues**: The updated code includes CORS support on both servers to prevent this
4. **Network issues**: Verify that the URL http://localhost:4001/graphql is accessible in your browser
5. **Introspection issues**: Ensure that introspection is enabled in your GraphQL server (it should be by default in dev mode)

You can test the GraphQL endpoint directly with:

```bash
curl -X POST http://localhost:4001/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ __schema { queryType { name } } }"}'
```

If you get a valid response, your GraphQL server should be working correctly for Voyager.

## Why a Standalone Server?

This implementation uses a standalone Express server rather than integrating with the main NestJS application because:

1. It keeps Voyager completely separate from your production code
2. It avoids bundling unnecessary tools with your production application
3. It can be run only when needed during development

## Features

The implementation includes the following features:

- Interactive graph visualization of your API schema
- Types sorted alphabetically for easier discovery
- Excluded relay-specific fields to reduce visual noise
- Ability to see deprecated fields (they are not hidden)
- Simple and clean interface for exploring your schema

## Note

This tool is primarily meant for development and documentation purposes. It should not be deployed in production environments.
