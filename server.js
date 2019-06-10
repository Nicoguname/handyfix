const express = require('express');
const artisanRoutes = require('./routes/artisan-routes.js');
const commentsRoute = require('./routes/comments-route');
const jobsRoute = require('./routes/jobs-route');
const cors = require('cors');
const app = express();
const port = 8080;
const url = `http://localhost:${port}`;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/artisan', artisanRoutes);
app.use('/comments', commentsRoute);
app.use('/jobs', jobsRoute);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});