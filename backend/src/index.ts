import cors from 'cors';
import express from 'express';

const PORT = process.env['PORT'] ?? 3_000;

const app = express();

app.use(express.json());
app.use(cors());

// This is just an example route
app.get('/sample', (request, response) => {
  response
    .status(200)
    .json({ message: 'Hello world: ' + JSON.stringify(request.query) });
});

// Add additional routes for implementation here...

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}.`);
});
