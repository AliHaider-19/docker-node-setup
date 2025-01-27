const express = require('express');
const app = express();


const PORT = 3010;

app.get('/', (req, res) => {
    console.log('Hello')
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
