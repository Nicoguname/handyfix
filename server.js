const express = require('express');
// const shortId = require('shortid');
const artisanRoutes = require('./routes/artisan-routes.js');
const cors = require('cors');
const app = express();
const port = 8080;
const url = `http://localhost:${port}`;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/artisan', artisanRoutes);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});