const express = require('express');
const app = express();

app.get('/div', (req, res) => {
    const { X, Y } = req.query;

    // Convert X and Y to numbers to prevent string concatenation in case of Y = 0
    const numX = Number(X);
    const numY = Number(Y);

    if (numY === 0) {
        // Properly return an error message for division by zero
        return res.status(400).json({ error: 'Cannot divide by zero.' });
    }

    const result = numX / numY;
    // Respond with a JSON object
    res.json({ X: numX, Y: numY, Result: result });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
