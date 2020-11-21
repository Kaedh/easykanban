const app = require('./app');
const port = 3131;

app.listen(port, (req, res) => {
    return console.log(`Server is running on https://localhost:${port}`);
});

