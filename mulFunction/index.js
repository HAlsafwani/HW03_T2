const express = require('express');
const app = express();

app.get('/mul', (req, res) => {
    const { X, Y } = req.query;
    const result = Number(X) * Number(Y);

    res.json({ X: X, Y: Y, Result: result });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});