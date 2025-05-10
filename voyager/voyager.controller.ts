import express from 'express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

const app = express();
const PORT = 4002; // Using a different port from your main app (4001)

app.use(
  '/',
  voyagerMiddleware({
    endpointUrl: 'http://localhost:4001/graphql', // Point to your main GraphQL server
    displayOptions: {
      sortByAlphabet: true,
      skipRelay: true,
      skipDeprecated: false,
      showLeafFields: true,
    },
  }),
);

app.listen(PORT, () => {
  console.log(`GraphQL Voyager running at http://localhost:${PORT}`);
});
