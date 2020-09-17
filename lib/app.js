const express = require('express');
const request = require('superagent');
const { locationQueue } = require('./pipeline/queue');
const app = express();


app.use(express.json());


app.post('/api/v1/air-quality', (req, res, next) => {
  locationQueue.add({ ...req.body })
    .then(job => res.send({ ...req.body, jobId: job.id }))
    .catch(next);
});

const getUsersSearch = async(city, state, country) => {
  const response = await request.get(`https://api.weatherbit.io/v2.0/current?key=${process.env.WEATHERBIT_API_KEY}&city=${city}&state=${state}&country=${country}`)

  return response.body.data[0].aqi
}

app.get('/api/v1/current', async(req, res) => {
  try {
    const userCity = req.query.city;
    const userState = req.query.state;
    const userCountry = req.query.country;

    const mungeData = await getUsersSearch(userCity, userState, userCountry);

    res.json(mungeData);

  } catch(e) {
    res.status(500).json({ error: e.message });
  }
})



app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
