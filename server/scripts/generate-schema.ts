import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import * as path from 'path';
import { AppModule } from '../app.module';

async function generateSchema() {
  console.log('Initializing NestJS application to generate GraphQL schema...');

  // Create a temporary NestJS application instance
  const app = await NestFactory.create(AppModule, {
    logger: ['error'], // Reduce logging noise
  });

  // Initialize the application (this will trigger schema generation)
  await app.init();

  const schemaPath = path.join(process.cwd(), 'server/schema.gql');

  // Verify the schema was generated
  if (fs.existsSync(schemaPath)) {
    const stats = fs.statSync(schemaPath);
    console.log(`Schema generated successfully at ${schemaPath} (${stats.size} bytes)`);

    // Optional: Read and print the schema
    // const schema = fs.readFileSync(schemaPath, 'utf8');
    // console.log('Schema content:', schema);
  } else {
    console.error('Failed to generate schema.');
  }

  // Close the application
  await app.close();
  console.log('Application closed.');
}

// Run the function
generateSchema()
  .then(() => {
    console.log('Schema generation complete.');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error generating schema:', error);
    process.exit(1);
  });
