const express = require('express');
const app = express();

app.get('/add', (req, res) => {
  const { X, Y } = req.query;
  const result = Number(X) + Number(Y);
  res.json({ X, Y, Result: result });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
