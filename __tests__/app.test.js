const request = require('supertest');
const app = require('../lib/app');
const { locationQueue } = require('../lib/pipeline/queue');

describe('AQ email routes', () => {
  afterAll(() => {
    return locationQueue.close();
  })
  it('POST route that takes a user location and phone number', async() => {
    const response = await request(app)
      .post('/api/v1/air-quality')
      .send({
        userPhoneNumber:'240-565-9921',
        userLocation: 'Portland, Oregon, US'
      });

    expect(response.body).toEqual({
      jobId: expect.any(String),
      userPhoneNumber:'240-565-9921',
      userLocation: 'Portland, Oregon, US'
    });
  });

  it('GET route that returns the AQI for the userLocation', async() => {
    const response = await request(app)
      .get('/api/v1/current?city=portland&state=or&country=us')

    console.log('AQI', response.body)
    expect(response.body).toEqual(expect.any(Number));
  })
});
