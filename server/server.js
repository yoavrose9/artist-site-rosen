const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Placeholder route for future core logic / APIs
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

