const express = require('express');
const app = express();
const port = 3500;

app.use(express.static('public'));
app.use(express.json());

app.all('*', (req, res) => {
    const request = req.originalUrl;

    const jsonanswer = {
        message: `the letter generated is ${request}`,
    };

    res.json(jsonanswer);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

