const express = require('express');
const { locationQueue } = require('./pipeline/queue');
const app = express();


app.use(express.json());


app.post('/api/v1/air-quality', (req, res, next) => {
  locationQueue.add({ ...req.body })
    .then(job => res.send({ ...req.body, jobId: job.id }))
    .catch(next);
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
